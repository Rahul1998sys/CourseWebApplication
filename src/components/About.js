import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

const About = () => {
  return (
    <div>
        <Card className='text-center mt-3'>
            <CardBody>
                <CardTitle tag='h3'>About Us!</CardTitle>
                <CardText>Welcome to our Course Application. Here, you can add, view, and manage your courses easily.</CardText>
                <CardText>This project is built using React and Reactstrap to demonstrate routing and component-based architecture.</CardText>
            </CardBody>
        </Card>
    </div>
  )
}

export default About