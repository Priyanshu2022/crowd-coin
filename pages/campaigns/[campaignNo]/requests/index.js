import React from 'react'
import Layout from '../../../../components/Layout'
import {Button} from 'semantic-ui-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Campaign from '../../../../ethereum/campaign'
import { useEffect } from 'react'
function RequestIndex() {
    const router=useRouter();
    useEffect(async() => {
        if(router.query.campaignNo){
          const campaign=Campaign(router.query.campaignNo);
          const requestCount=await campaign.methods.getRequestsCount().call();
          console.log(requestCount)
        //   for(let i=0;i<requestCount)
        //   console.log(requests)
        }
        
      }, [router.query])
  return (
    <Layout>
        <h3>Requests</h3>
        <Link href={`/campaigns/${router.query.campaignNo}/requests/new`}>
        <Button primary>Add Request</Button>
        </Link>

    </Layout>
  )
}

export default RequestIndex