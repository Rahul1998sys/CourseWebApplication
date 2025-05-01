import React from 'react';
import Home from './components/Home'
import Header from './components/Header';
// import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import './App.css'
import { Col, Container, Row } from 'reactstrap';
import Menus from './components/Menus';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Contactform from './components/Contactform';
const App = () => {

  return (
    <>
    <Router>
      <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
            <Routes>
              <Route path='/' element ={<Home />} />
              <Route path='/add-course' element ={<Addcourse />} />
              <Route path='/view-courses' element ={<Allcourses />} />
              <Route path='/about-us' element ={<About />} />
              <Route path='/contact-us' element ={<Contact />} />
              <Route path='/contact-form' element ={<Contactform />} />
            </Routes>
            </Col>
          </Row>
        </Container>
    </Router>
    </>
  )
}

export default App;


// Resubale Component

// import React from 'react';
// import Reusable from './Reusable';

// function App(props) {
//   return (
//     <div>
//       <Reusable name ='Rahul'/>
//       <Reusable name ='Priti'/>
//       <Reusable name ='Anshika'/>
//       <Reusable name ='Karishma'/>
//     </div>
//   );
// }

// export default App;
