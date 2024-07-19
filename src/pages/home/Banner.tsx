import { Button } from "../../components/Button";

export function Banner(){
  return (
    <div className='h-screen flex justify-center items-center gap-2 px-5'>
      <div className='flex text-left w-1/2 px-2 ml-4'>
       <div className='text-neutral-900 max-w-md'>
        <p className='text-2xl font-semibold mb-2'>
          O melhor suporte no cuidado para seu <br />
           <span className="text-yellow-400 font-extrabold">melhor amigo</span>
        </p>
        <p className="text-zinc-800/60 mb-2">
          Monitore seu melhor amigo pelo nosso aplicativo, via tecnologia RFID e NFC. 
        </p>
        <div className="">
          <Button >Acessar</Button>        
        </div>
       </div>
      </div>
      <div className="w-1/2 px-2">
        <img className="max-w-md " src="/dogandcat.png" alt="Dog and Cat Picture" />
      </div>
    </div>
  )
}