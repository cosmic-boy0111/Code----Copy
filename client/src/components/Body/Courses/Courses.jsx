import React, { useEffect, useState } from 'react'
import Filter_Accordian from './Filter_Accordian'
import '../../../style/Body/Courses.css'
import CourseContainer from './CourseContainer'

const Courses = () => {

  const [courses, setCourses] = useState([])

  const getData =  async () =>{
    try {
      const res = await fetch('/allPlayLists',{
        method:'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      
      const data = await res.json();
      console.log("Courses of data");
      console.log(data);
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <div className='body_margin'>
      <Filter_Accordian />
      <CourseContainer courses={courses}/>
    </div>
  )
}

export default Courses