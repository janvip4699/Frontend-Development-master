import React from 'react'

const WhyUsCard = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 hover:bg-secondary hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointor'>
        <p>{icon}</p>
        <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae enim maxime libero temporibus excepturi provident id facilis. Minus distinctio possimus nostrum odio assumenda ipsa excepturi totam. Repudiandae, sunt iusto?</p>
    </div>
  )
}

export default WhyUsCard
