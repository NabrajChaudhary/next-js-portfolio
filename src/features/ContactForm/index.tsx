import React from 'react'
import SectionTitle from '@/components/SectionTitle'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import Input from '@/components/Input'
import TextAreaInput from '@/components/TextAreaInput'
import useSWR from "swr"
import { message } from 'antd'


const ContactForm = () => {
  const FormApi:any = process.env.FORM_API
  const formik = useFormik({
    
    initialValues:{
        name:"",
        email:"",
        mobile:"",
        subject:"",
        message:""

    },
    validationSchema:Yup.object({
        name:Yup.string().max(40, "Name must be less than 40 Characters")
        .required("Name is required"),
        email:Yup.string()
        .email("Please provide valid email address")
        .required("Email is required"),
        mobile:Yup.string()
        .min(10, "Phone Number must be in 10 Number")
        .max(10, "Phone Number must be in 10 Number")
        .required("Phone Number is required"),
        subject:Yup.string()
        .required("Subject is required"),
        message:Yup.string()
        .required("Name is required")
        

    }),
    onSubmit: async (values,action)=>{
        // values.preventDefault();
        action.resetForm();
        try {
          let response = await axios.post(FormApi,values)
          if(response.data.message){
              message.success(response.data.message);
          }else{
              message.error(response.data.message)
          }
       } catch (error:any) {
          message.error(error.message)
       }
       console.log("form Submitted", values);
     
    }
})
  return (
    <section>
        <SectionTitle title='Get Nabraj'/>
        <div className="flex py-10  sm:flex-col items-center justify-center">
        <div className="w-7/12">  
            <form className='w-full' onSubmit={formik.handleSubmit}>
                <div className="flex sm:flex-col flex-row gap-4">
                <Input 
                name="name"
                label="Name"
                className='basis-1/2'
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                touched={formik.touched.name}
                error={formik.errors.name}
                errorName={formik.errors.name}
                type={'text'}/>
                <Input 
                name="email"
                label="Email"
                className='basis-1/2'
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                touched={formik.touched.email}
                error={formik.errors.email}
                errorName={formik.errors.email}
                type={'text'}/>
                </div>
                <div className="flex sm:flex-col flex-row gap-4">
                <Input 
                name="mobile"
                className='sm:basis-2/2 basis-1/2'
                label="Mobile Number"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.mobile}
                onBlur={formik.handleBlur}
                touched={formik.touched.mobile}
                error={formik.errors.mobile}
                errorName={formik.errors.mobile}
                type={'text'}/>
                </div>
                <Input 
                 className='basis-2/2'
                name="subject"
                label="Subject"
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.subject}
                onBlur={formik.handleBlur}
                touched={formik.touched.subject}
                error={formik.errors.subject}
                errorName={formik.errors.subject}
                type={'text'}/>
                <TextAreaInput 
                 name="message"
                 label="Write Message"
                 placeholder=" "
                 onChange={formik.handleChange}
                 value={formik.values.message}
                 onBlur={formik.handleBlur}
                 touched={formik.touched.message}
                 error={formik.errors.message}
                 errorName={formik.errors.message}
                 rows={4}
                 />

                 <button className='px-8 rounded-md py-3 border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-white' type='submit'>Submit</button>
            </form>
          
        </div>
        </div>
    </section>
  )
}

export default ContactForm