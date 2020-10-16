import React from 'react'

const Header = ({course}) => {
    console.log("Header test",course)
    return (
      <div>
        <h3>{course}</h3>
      </div>
    )
  }
  
  const Part = ({part}) => {
    console.log('part=',part)
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  
  
  
  const Content = ({parts}) => {
    console.log("parts=", parts)
    return (
      <div>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    console.log('total parts=', parts)
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <p>
          <b>Total of exercises {total}</b>
        </p>
      </div>
    )
  }
  
  const Course = ({course}) => {
    console.log(course.name)
    console.log(course.parts)
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course