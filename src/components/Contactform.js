import React from 'react'
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap'

const Contactform = () => {
  return (
    <div>
        <Card className='text-center mt-3'>
            <CardBody>
                <CardTitle tag='h3' className='text-center'>Contact Form</CardTitle>
                <Form>

                    <FormGroup>
                        <Label for='name'>Name</Label>
                        <Input type='text' id='name' placeholder='enter your name'/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" id="message" placeholder="Write your message here" rows="4"/>
                    </FormGroup>

                    <Button color='primary'>Send Message</Button>
                </Form>
            </CardBody>
        </Card>
    </div>
  )
}

export default Contactform