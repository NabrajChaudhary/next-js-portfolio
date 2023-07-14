import React from 'react'

const SocialMedia = () => {
  return (
    <section className="fixed left-0 bottom-0 px-10  sm:static">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 sm:flex-row">
          <i className="ri-facebook-circle-line text-gray-600 text-2xl hover:text-orange-500 cursor-pointer" />
          <a href="mailto:nabrajchaudhary1412@gmail.com"><i className="ri-mail-line text-gray-600 text-2xl hover:text-orange-500"></i></a>
        <i className="ri-instagram-line text-gray-600 text-2xl hover:text-orange-500"></i>
        <a href="https://www.linkedin.com/in/nabraj-chaudhary-94091b208/" rel="noreferrer" target='_blank'><i className="ri-linkedin-box-line text-gray-600 text-2xl hover:text-orange-500"></i></a> 
        <a href="https://github.com/NabrajChaudhary" rel="noreferrer" target='_blank'><i className="ri-github-line text-gray-600 text-2xl hover:text-orange-500"> </i></a> 
      </div>
      <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
    </div>
  </section>
  )
}

export default SocialMedia