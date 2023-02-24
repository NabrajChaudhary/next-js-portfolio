import React from 'react'
import clsx from "clsx"

type FormType = {
    type:string
    name:string
    placeholder:string
    value:string
    onChange:any
    label:string
    className:string
    onBlur:any
    touched:any
    error:any
    errorName:any
}
const Input = (props:FormType) => {
    const{type,name,placeholder,value,onChange,label,className=' ',onBlur,touched,error,errorName}=props
  return (
    <div className={clsx(`relative z-0 w-12/12 mb-6 ${className}`)}>
    <input 
    type={type}  
    name={name} 
    onChange={onChange} 
    value={value} 
    placeholder={placeholder}
    onBlur={onBlur}
    className="block py-2.5 px-0 w-full text-[16px] text-white bg-transparent border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-tertiary border-0 border-b-2 peer"  />
    <label className="peer-focus:font-medium absolute text-[16px] text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-tertiary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    {touched && error && <p className="py-1 text-sm text-secondary">{errorName}</p>}
</div>
  )
}

export default Input