import React from 'react'
import {Button, Container} from 'reactstrap'

const Home = () => {
    return (
        <div className='home'>
                <h1>Learn code with Rahul !</h1>
                <p>I’m a passionate Frontend Developer with a Master’s in Computer Applications (MCA, 2023) and hands-on experience in building interactive and responsive web applications using JavaScript and React.
                    <br />

            🔧 Skills: JavaScript, React, HTML, CSS, Git, Core Java, REST APIs
            <br />
            Let’s connect and create great user experiences together!</p>
            <Container>
                <Button color='primary' outline>Start Using</Button>
            </Container>
        </div>
    )
}

export default Home