import React from 'react'
import Select from 'react-select'
import "./index.css"

function Multiplecheck() {

  const students = [
    { value: 'Alex', label: 'Alex' },
    { value: 'Deven', label: 'Deven' },
    { value: 'Vinicious', label: 'Vinicious' },
  ];
  
    return (
        <>
      <div className="container">
        <Select
          options={students}
          isMulti
        />
      </div>
     
    </>
    );
  }
  
export default Multiplecheck;