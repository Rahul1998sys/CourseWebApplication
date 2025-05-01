import React, { useState } from 'react'
import Course from './Course'

const Allcourses = () => {
    const [courses, setCourses] = useState([
        {title: 'Java course', description: 'This is java course for beginners'},
        {title: 'ReactJs course', description: 'This is reactjs course for beginners'},
        {title: 'Javascript course', description: 'This is javascript course for beginners'},
        {title: 'PHP course', description: 'This is PHP course for beginners'}
    ])
  return (
    <div>
        <h1>All Courses</h1>
        <p>List of All Courses here</p>
        {courses.length>0 ? courses.map((item, idx)=> <Course key={idx} course ={item} />): "No course available"}
        
    </div>
  )
}

export default Allcourses