import React,{useRef} from 'react'
import SectionTitle from '@/components/SectionTitle'


type AboutProps={
    title:string
    about:{
        lottieURL:string
        description1:string
        description2:string
        skills:string[]
    }
}
const About = (props:AboutProps) => {
    const{title,about}=props
    const{lottieURL,description1,description2,skills}=about
    const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <>
    <SectionTitle title={title}/>

    <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
           ref={ref}
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">{description1}</p>
          <p className="text-white">{description2}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">Skills</h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div
              className="border-tertiary py-2.5 px-6 border-2 cursor-pointer"
              key={index}
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About