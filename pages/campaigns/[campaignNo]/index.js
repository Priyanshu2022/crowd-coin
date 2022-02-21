import { useRouter } from "next/router"
import Layout from "../../../components/Layout";
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';
import { useEffect,useState } from "react";
import { Card } from "semantic-ui-react";
import ContributeForm from "../../../components/ContributeForm";
import { Grid ,Button} from "semantic-ui-react";
import Link from "next/link";

const campaignNo =() => {
  const {query}=useRouter();
  let temp;
  const [sum, setsum] = useState({minimumContribution:'',
  balance:'',
  requestsCount:'',
  approversCount:'',
  manager:''})
  useEffect(async() => {
    if(query.campaignNo){
      const campaign=Campaign(query.campaignNo);
      temp=await campaign.methods.getSummary().call();
      setsum({
        minimumContribution:temp[0],
        balance:temp[1],
        requestsCount:temp[2],
        approversCount:temp[3],
        manager:temp[4]
      })
    }
    
  }, [query])
    function renderCards(){
      if(sum.manager && sum.requestsCount && sum.approversCount && sum.balance){
        const items=[
          {
            header:web3.utils.fromWei(sum.balance,'ether'),
            meta:'Campaign balance ether',
            desciption:' the balance is how much mone thsi campaign has left'
          },
          {
            header:sum.manager,
            meta:'address of manager',
            description:'the managetr create this campaign and  fdi ',
            style:{overflowWrap:'break-word'}
          },
          {
            header:sum.requestsCount,
            meta:'Number of Request',
            description:'A request tries to withdraw money from contract '
          },
          {
            header:sum.approversCount,
            meta:'Number of approvers',
            desciption:'Number of people whe have already donated '
          },
          {
            header:sum.minimumContribution,
            meta:'minimum contribution (wei)',
            desciption:'you must contribute at least this much wei to be a contibutor'
          }
        ]
      return <Card.Group items={items}/>;
      }
      
    }

  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Grid>
        <Grid.Row>
        <Grid.Column width={10}>
        {renderCards()}
        
        </Grid.Column>
        <Grid.Column width={6}>
      <ContributeForm address={query.campaignNo} />
        </Grid.Column>
        </Grid.Row>
      <Grid.Row>
        <Grid.Column>
      <Link href={`/campaigns/${query.campaignNo}/requests`}>
         <Button primary>
          View Requests
         </Button>
        </Link>
        </Grid.Column>
      </Grid.Row>
      </Grid>


    </Layout>
  )
}

export default campaignNo