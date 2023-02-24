import axios from 'axios'
import useSWR from "swr"
import Loader from '@/components/Loader'
import About from '@/features/About'
import Experience from '@/features/Experience'
import Intro from '@/features/Intro'
import Projects from '@/features/Projects'
import ContactForm from '@/features/ContactForm'

type UserType={
  data:{
      about:any
      contact:any
      intros:any
      experience:any

  }
}
export default function Home() {

  const apiLink= process.env.API_LINK
  const fetcher = async(url:string)=> await axios.get(url).then((res)=>res.data)
  const{data,error}= useSWR(apiLink,fetcher,{refreshInterval:3000})

  if(error) return <Loader/>
   if(!data) return <Loader/>
  
  const{intros,contact,about,experience,projects}=data
  // console.log("data",data)

  return (
    <>
    <Intro intro={intros}/>
    <About title='About Me' about={about}/>
    <Experience title='Experience' experience={experience} />
    <Projects title='My Projects' projects={projects}/>
    <ContactForm/>
    </>
  )
}
