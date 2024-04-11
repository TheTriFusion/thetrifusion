import React from 'react'

const ClientPage = () => {
  return (
    <>
        <section className='h-max w-screen flex flex-col gap-8'>
                <div className='font-space text-4xl m:max-3xl:text-6xl text-center'>
                    <h1>What our clients say about us</h1>
                </div>
                <div className='flex flex-col gap-4 font-space m:max-3xl:flex-row justify-evenly'>
                    <div className='w-80 h-96 flex flex-col gap-2 justify-center items-center shadow-md shadow-[#3C3633]'>
                        <h1 className='text-[2vw] font-semibold'>A2D Technologies</h1>
                        <img src="../images/work-a2d.png" alt="" className='w-[15vw] h-[10vh]' />
                        <p className='text-justify text-[1.2vw] p-2'>From concept to execution, The TriFusion exceeded all expectations. Their brilliant strategies and flawless execution propelled our success beyond imagination. With their unwavering dedication and unparalleled expertise, they've earned our utmost trust and admiration.The TriFusion is simply exceptional.</p>
                    </div>
                    <div className='shadow-md shadow-[#3C3633] w-80 h-96 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-[2vw] font-semibold'>Eats</h1>
                        <img src="../images/work-eats.png" alt="" className='w-[15vw] h-[10vh]' />
                        <p className='text-justify text-[1.2vw] p-2'>Partnering with The TriFusion was a revelation. Their innovative approach and meticulous attention to detail set them apart. They not only met our expectations but shattered them with unparalleled brilliance. The TriFusion redefines excellence.</p>
                    </div>
                    <div className='shadow-md shadow-[#3C3633] w-80 h-96 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-[2vw] font-semibold'>S-Kits</h1>
                        <img src="../images/work-skits.jpg" alt="" className=' w-[15vw] h-[10vh]' />
                        <p className='text-justify text-[1.2vw] p-2'>Choosing The TriFusion was the best decision we made for our business. Their creative genius and unwavering dedication transformed our vision into reality. With The TriFusion, excellence isn't just a goal – it's a guarantee.</p>
                    </div>
                    <div className='shadow-md shadow-[#3C3633] w-80 h-96 flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-[2vw] font-semibold'>Rukmanee Jewery</h1>
                        <img src="../images/work-rukmanee.jpg" alt="" className=' w-[15vw] h-[10vh]' />
                        <p className='text-justify text-[1.2vw] p-2'>Working with The TriFusion has been a revelation. Their blend of creativity and precision delivered results beyond our wildest dreams. They didn't just meet our needs; they anticipated them with finesse. With The TriFusion, it's the constellations of innovation we navigate together, charting new paths in the cosmos of success.</p>
                    </div>
                </div>
        </section>
    </>
  )
}

export default ClientPage