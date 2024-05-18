import React from 'react'
import '../index.css'
export const Inputitem = ({input,id,type,onChangeData,name,value,pattern}) => {
  // const onchange =(e)=>{
  //   console.log(e.target.value);
  // }
  return (
    <div className={`col-md-6 d-flex div-center-col my-2`} >
    <label htmlFor={id}  className='labl'>
      {input}
    </label>
    <input
    className='inpt'
    value={value}
      id={id}
      name={name}
      type={type}
      pattern={pattern}

    maxLength={type == "tel"?10:20}
      placeholder={input}
      onChange={onChangeData}
      required
    />
  </div>
  )
}
