import React from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'

const Addcourse = () => {
return (
    <>
    <h1 className='text-center my-3'>Fill Your Course Details</h1>
    <Form>
        {/* Course id */}

        <FormGroup>
            <lebel for='courseId'>Course ID</lebel>
            <Input type='text' placeholder='Enter your course ID here' name='userId' id='userId' />
        </FormGroup>

        {/* Dropdown select */}

        <FormGroup>
            <lebel for='select'>Select</lebel>
            <Input type='select' id='select' name='select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </Input>
        </FormGroup>
            

            {/* File Attached */}

        <FormGroup>
    <lebel for="exampleFile">File</lebel>
    <Input
        id="exampleFile"
        name="file"
        type="file"
    />
        </FormGroup>

        {/* Course Title */}

        <FormGroup>
        <lebel for='title'>Course Title</lebel>
        <Input type='text' placeholder='Enter your course title here' id='title' />
        </FormGroup>

        {/* Course description */}
        
        <FormGroup>
            <lebel for='description'>Course Description</lebel>
            <Input type='textarea' placeholder='Enter description here' id='description' style={{height:100}}/>
        </FormGroup>

        <Container className='text-center'>
        <Button color='success'>Add course</Button>
        <Button color='warning'>Clear</Button>
        </Container>
    </Form>
    </>
)
}

export default Addcourse;