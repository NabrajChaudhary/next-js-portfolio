import React from 'react'

const Loader = () => {
  return (
    <section className="h-full flex items-center justify-center fixed inset-0 bg-primary z-[100]">
    <div className="flex gap-5 text-6xl sm:text-3xl font-semibold">
      <h1 className="text-secondary n">N</h1>
      <h1 className="text-white c">A</h1>
      <h1 className="text-tertiary s">B</h1>
      <h1 className="text-secondary n">R</h1>
      <h1 className="text-white c">A</h1>
      <h1 className="text-tertiary s">J</h1>
    </div>
  </section>
  )
}

export default Loader