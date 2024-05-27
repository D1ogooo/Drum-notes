import ImageCard from '../../assets/print para testes[.png'
import { data } from '../../Pages/Home/Detail/data'

export const Card = () => {
  return (
   <>
    {data.map((card,id) => (
    <div className="bg-background-card h-auto w-[20rem] rounded-[10px] p-[.7rem]">
    <img src={card.image} className='rounded-[7px] mb-2.5' key={id}/>
    <hr className='mt-2 mb-3 w-full'/>
    <div className='overflow-y-auto w-full h-[8rem] text-center text-[#fff] font-mono'>
     <h2 className='text-text-card'>{card.title}</h2>
     <p className='w-full'>{card.conteudo}</p>
     </div>
    </div>
    ))}
  </>
  )
}