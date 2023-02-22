import axios from 'axios'
import useSWR from "swr"
import Loader from '@/components/Loader'
import About from '@/features/About'
import Experience from '@/features/Experience'
import Intro from '@/features/Intro'

type UserType={
  data:{
      about:any
      contact:any
      intros:any
      experience:any

  }
}
export default function Home() {

  const apiLink=`https://confused-hare-robe.cyclic.app/api/portfolio/get-portfolio-data`
  const fetcher = async(url:string)=> await axios.get(url).then((res)=>res.data)
  const{data,error}= useSWR(apiLink,fetcher,{refreshInterval:3000})

  if(error) return <Loader/>
   if(!data) return <Loader/>

  console.log("data",data)
  const{intros,contact,about,experience}=data
  console.log("Intros", intros)

  return (
    <>
    <Intro intro={intros}/>
    <About title='About Me' about={about}/>
    <Experience title='Experience' experience={experience} />
    </>
  )
}
