import React from 'react'

const SocialMedia = () => {
  return (
    <section className="fixed left-0 bottom-0 px-10  sm:static">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 sm:flex-row">
          <i className="ri-facebook-circle-line text-gray-600 text-2xl" />
        <i className="ri-mail-line text-gray-600 text-2xl"></i>
        <i className="ri-instagram-line text-gray-600 text-2xl"></i>
        <i className="ri-linkedin-box-line text-gray-600 text-2xl"></i>
        <i className="ri-github-line text-gray-600 text-2xl"></i>
      </div>
      <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
    </div>
  </section>
  )
}

export default SocialMedia