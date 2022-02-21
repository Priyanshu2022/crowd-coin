import React from 'react';
import { useEffect } from 'react';
import { Card,Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import Link from 'next/link'


// to get list of campaign , import web3 and configure.
// web3 uses provider to communicate with external ethereum network
// metamask automatically injects provider into the page whenever it runs
// tell web3 that a deployed copy of campaign factory exists
// retrive a list of deployed campaigns
// use react ot show something about each campaign
index.getInitialProps=async()=>{
    const campaigns= await factory.methods.getDeployedCampaigns().call();
    return {campaigns};
}

function index({campaigns}) {
  function renderCampaigns(){
    const items=campaigns.map(address=>{
      return {header:address,
      description:<Link href={`/campaigns/${address}`}>View Campaign</Link>,
      fluid:true
      }
    });
    return <Card.Group items={items}/>;
  }
  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Link href="/campaigns/new">
        <Button
        floated='right'
        content="Create Campaign"
        icon="add circle"
        primary
        />
        </Link>
        {renderCampaigns()}
      </div>
    </Layout>
  )
}


export default index