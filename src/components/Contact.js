import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

const Contact = () => {
return (
    <div>
        <Card className='text-center mt-3'>
            <CardBody>
                <CardTitle tag='h3'>Contact Us!</CardTitle>
                <CardText>You can reach us at: <strong>rahulsaxena09@gmail.com</strong></CardText>
                <CardText>Phone: <strong>+91 9876543210</strong></CardText>
                <CardText>Address: Noida, Sector 63, Hitech Street, India</CardText>
            </CardBody>
        </Card>
    </div>
)
}

export default Contact