import { Card } from '../../component/Card/index'

function Home () {
  return (
   <>
    <div className="mx-auto w-[90%]">
     <h1 className="py-5 font-medium text-xl mb-2">* Seu progresso</h1>
     <main className='flex gap-4'>
     <Card/>
     </main>
    </div>
   </>
  )
}

export default Home