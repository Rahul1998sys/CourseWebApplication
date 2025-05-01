import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardFooter, CardText, Button, Container } from 'reactstrap'

const Course = ({course}) => {
return (
    <Card className='text-center'>
        <CardBody>
            <CardSubtitle className='course'>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='btn'>
            <Button color='warning'>Update</Button>
            <Button color='danger'>Delete</Button>
            </Container>
        </CardBody>
    </Card>
)
}

export default Course