import web3 from './web3';
import CampaignFactory from './build/campaignFactory.json';

const instance=new web3.eth.Contract(
    CampaignFactory.abi,
    '0x7Cab303C44062BDa9648DF7Cbc1a7aF8DB8D13f8'
);
export default instance;