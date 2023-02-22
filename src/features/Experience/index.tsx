import SectionTitle from '@/components/SectionTitle';
import React,{useState} from 'react'

type ExpProps = {
    title:string
    experience:{
        company:string
        description:string
        period:string
        title:string
    }[]
    
}

const Experience = (props: ExpProps) => {
    const{title,experience}=props
     const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  return (
    <>
    <SectionTitle title={title}/>
    <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience.map((experience, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {experience[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            cupiditate at totam error dolor vero accusamus consequuntur,
            voluptates laboriosam architecto.
          </p>
        </div>
      </div>
    </>
  )
}

export default Experience