import Loader from '@/components/Loader'
import About from '@/features/About'
import Experience from '@/features/Experience'
import Intro from '@/features/Intro'
import axios from 'axios'
import Head from 'next/head'
import useSWR from "swr"

type UserType={
  data:{
      about:any
      contact:any
      intros:any
      experience:any

  }
}
export default function Home() {
//   const{data}=props
//   if(!data) return <Loader/>
// console.log(data)
// const{intros,contact,about,experience}=data

// console.log("intros", intros)
// console.log("about", about)

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
      <Head>
        <title>Nabraj Chaudhary | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nlogo.png" />
      </Head>
    <Intro intro={intros}/>
    <About title='About Me' about={about}/>
    <Experience title='Experience' experience={experience} />
    </>
  )
}


// export async function getServerSideProps(){
//   const apiLink=`https://confused-hare-robe.cyclic.app/api/portfolio/get-portfolio-data`;
//   const {data}=await axios.get(apiLink)  
//   return{
//       props:{
//           data
//       }
//   }
// }