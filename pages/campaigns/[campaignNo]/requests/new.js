import React from 'react'
import {Form,Button,Message,Input} from 'semantic-ui-react'
import Campaign from '../../../../ethereum/campaign'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../../../../components/Layout'
import web3 from '../../../../ethereum/web3'

function RequestNew() {
    const router=useRouter();
    const [value, setvalue] = useState('')
    const [description, setdescription] = useState('')
    const [recipient, setrecipient] = useState('')
    const [loading, setloading] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')
    async function onSubmit(event){
        event.preventDefault();
        const campaign=Campaign(router.query.campaignNo);
        console.log(router.query.campaignNo)
        setloading(true)
        seterrorMessage('')
        try{
            const accounts=await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value,'ether'),
                recipient
            ).send({from:accounts[0]});
            window.location.reload()
        }catch(err){
            seterrorMessage(err.message)
        }
        setloading(false)
    }
  return (
      <Layout>
          <h3>Create a Request</h3>
    <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
            <label>Description</label>
            <Input value={description} onChange={event=>setdescription(event.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Value in Ether</label>
            <Input value={value} onChange={event=>setvalue(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Recipient</label>
            <Input value={recipient} onChange={event=>setrecipient(event.target.value)}/>
        </Form.Field>
        <Message error header="Oops!" content={errorMessage}/>
        <Button primary loading={loading}>
            Create!
        </Button>
    </Form>
    </Layout>
  )
}

export default RequestNew