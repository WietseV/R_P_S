
import GameSelect from './gameSelect'

export default function Home() {

  return (
    <main className="min-h-screen w-screen">
      <div className="px-8 w-full h-full top-0 left-0 fixed bg-black bg-opacity-40 flex justify-center items-center z-10">
        <div className='w-1/5'>
          <GameSelect/>
        </div>
        
      </div>
    </main>
  )
}
