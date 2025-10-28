import Image from 'next/image'

const TestimonialCard = () => {
  return (
    <div className='flex flex-col gap-2 w-[350px] h-[200px] text-md p-7 justify-between rounded-2xl bg-[#ececec] '>
      <div className='flex flex-col gap-2'>
        <Image src="/five-star.svg" alt="star" height={120} width={120} />
        <p>The best ticket management app i have ever used</p>        
      </div>
        <p className='font-bold text-right'>-Heritage</p>
    </div>
  )
}

export default TestimonialCard