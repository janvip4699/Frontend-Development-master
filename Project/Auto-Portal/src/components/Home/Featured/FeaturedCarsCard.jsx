import React from 'react'

const FeaturedCarsCard = ({id, img, name, price}) => {
  return (
    <div className='border-2 border-secondary bg-slate-100 text-black rounded-sm mb-2 cursor-pointor hover:scale-95 hover:bg-slate-200 transition duration-200 ease-linear px-4 py-4' key={id}>
        <div>
            <img src={img} alt="img" className='rounded-t-xl w-full'></img>
        </div>
        <div className='flex flex-col ms-2'>
            <h1 className='font-semibold text-xl pt-2'>{name}</h1>
            <div className='flex gap-10 pt-2'>
                <h2 className='font-mediium text-sm'>Rs. {price} onwards</h2>
            </div>
            <h3 className='font-medium text-sm'>On-Road Price, Rajkot</h3>
            <button className='hidden lg:flex border-2 border-primary text-sm font-semibold px-2 py-2 rounded-sm hover:bg-primary hover:text-secondary transition duration-200 ease-linear text-primary w-[150px] justify-center'>Buy Now</button>
        </div>
    </div>
  )
}

export default FeaturedCarsCard
