import React from 'react'
import {Button, Form,Input,Message} from 'semantic-ui-react'
import {useState} from 'react'
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'

function ContributeForm(props) {
    const [value, setvalue] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    const [loading, setloading] = useState(false)
    async function onSubmit(event){
        event.preventDefault();
        const campaign=Campaign(props.address);
        setloading(true)
        seterrorMessage('')
        try{
            const accounts=await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(value,'ether')
            })
            window.location.reload();
        }catch(err){
            console.log(err)
            seterrorMessage(err.message)
        }
        setloading(false)
        setvalue('')
    }
  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
            <label>Amount To contribute</label>
            <Input
            value={value}
            onChange={event=>setvalue(event.target.value)}
            label="ether"
            labelPosition='right'
            />
            <Message error header="Oops!" content={errorMessage}/>
            <Button primary loading={loading}>
                Contribute!
            </Button>
        </Form.Field>
    </Form>
  )
}

export default ContributeForm