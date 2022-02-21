pragma solidity >=0.6.6;
contract campaignFactory{
    address[] public deployedCampaigns;
    function createCampaign(uint minimum) public{
        address newCampaign= address(new Campaign(minimum,msg.sender));
        deployedCampaigns.push(newCampaign);
    }
    function getDeployedCampaigns() public view returns(address[] memory){
        return deployedCampaigns;
    }

}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address =>bool) approvals;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    uint public requestCount=0;

    uint256 numRequests;
    mapping(uint256 => Request) public requests;

    modifier restricted(){
        require(msg.sender==manager);
        _;
    }

    constructor(uint minimum,address creator)public{
        manager=creator;
        minimumContribution=minimum;
    }
    function contribute()public payable{
        require(msg.value>minimumContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }
    function createRequest(string memory description,uint value, address recipient)public restricted{
        Request storage r = requests[numRequests++];
                r.description = description;
                r.value = value;
                r.recipient = recipient;
                r.complete = false;
                r.approvalCount = 0;
    }
    function approveRequest(uint index) public{
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);

        requests[index].approvals[msg.sender]=true;
        requests[index].approvalCount++;
        requestCount++;
    }
    function finalizeRequest(uint index) public restricted{
        require(!requests[index].complete);
        require(requests[index].approvalCount>(approversCount/2));
        payable(requests[index].recipient).transfer(requests[index].value);
        requests[index].complete=true;
    }
    function getSummary() public view returns(
        uint,uint,uint,uint,address
    ){
        return (
            minimumContribution,
            address(this).balance,
            requestCount,
            approversCount,
            manager
        );
    }
    function getRequestsCount() public view returns(uint){
        return requestCount;
    }
}