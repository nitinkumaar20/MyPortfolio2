import React from 'react'

export const Inputitem = ({input,id,type,onChangeData,name,value,pattern}) => {
  // const onchange =(e)=>{
  //   console.log(e.target.value);
  // }
  return (
    <div className={`col-md-6 d-flex div-center-col my-2`} >
    <label htmlFor={id} style={{ fontSize: "1.5rem",}}>
      {input}
    </label>
    <input
    value={value}
      id={id}
      name={name}
      type={type}
      pattern={pattern}
      style={{fontSize:'1.5rem',outline:'none', borderRadius:'1rem',padding:'0 1rem',}}
    maxLength={type == "tel"?10:20}
      placeholder={input}
      onChange={onChangeData}
      required
    />
  </div>
  )
}
