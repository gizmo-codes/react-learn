import React from "react"
// Used to track the state of an array of objects that contain information
import { useState } from React;

const Employees = () => {

    // Example of a built-in React Hook
    // Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.
    // This page lists all built-in Hooks in React: https://react.dev/reference/react

    // Calling useState in this fashion is declaring two variables as arrays (In JS this is called Array Destructuring).
    // employess, which is housing data from the first value returned by useState (our Dictionary)
    // setEmployees, which is a function reference, will update the values in the employess Array
    
    // This is the standard format for useState
    // const [state, setState] = useState(initialState);
    // https://react.dev/reference/react/useState

    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }])

    // Since this return statement is on more than one line, the return value must be placed in parens.
    return(
        <main>
            {/* What a weird way to comment... JSX */}
            
            {
                // https://react.dev/learn/rendering-lists
                employees.map((employee) => 
                   <p> {employee.fullName} </p>
                )
            }
        </main>
    )
}

export default Employees