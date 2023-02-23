import React from 'react'
import Typewriter from 'typewriter-effect';


type IntroType={
    intro:{
    firstName:string 
    lastName:string 
    welcomeText:string 
    description:string 
    caption:string
    }

}

const Intro = (props:IntroType) => {
    const{intro}=props
    const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
    <h1 className="text-white text-2xl">{welcomeText}</h1>
    <h2 className="text-5xl sm:text-3xl text-secondary font-semibold">
      {firstName} {lastName}
    </h2>
    <h3 className="text-6xl sm:text-3xl text-white font-semibold">
      <Typewriter
      options={{
        strings: caption,
        autoStart: true,
        loop: true,
      }}



/>
    </h3>
    <p className="text-white w-2/3">{description}</p>
    <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
      {"  "}
      Get CV
    </button>
  </div>
  )
}

export default Intro