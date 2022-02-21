import React,{Component} from 'react'
import Layout from '../../components/Layout'
import {Form,Button,Input,Message} from 'semantic-ui-react'
import { useState } from 'react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

function CampaignNew() {
    const [minimumContribution, setminimuContribution] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    const [loading, setloading] = useState(false)
    async function onSubmit (event){
        event.preventDefault();
        setloading(true)
        seterrorMessage('')
        try{
            const accounts=await web3.eth.getAccounts();
            await factory.methods.createCampaign(minimumContribution).send({
            from:accounts[0]
        })
        history.pushState({urlPath:'/'},'','/');
        window.location.reload();
        }catch(err){
            seterrorMessage(err.message);
        }
        setloading(false)
    }
  return (
    <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={onSubmit} error={!!errorMessage}>
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" labelPosition='right' value={minimumContribution} onChange={event=>setminimuContribution(event.target.value)}/>
            </Form.Field>
            <Message error header="Oops!" content={errorMessage}/>
            <Button loading={loading} primary>Create!</Button>
        </Form>
    </Layout>
  )
}

export default CampaignNew