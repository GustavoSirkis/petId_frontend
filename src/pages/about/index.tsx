import { Navbar } from "../../components/Navbar";

export function About(){
  return (
    
    <section>
      <Navbar />
    <div className="h-screen flex justify-center items-center gap-2 px-5">
      <div className="text-left w-1/2">
        <h1 className="font-extrabold text-4xl mb-2">Conheça a <span className="text-amber-400">nossa trajetória</span></h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, 
          minima quae! Ipsam animi atque nihil nostrum ipsum consequuntur 
          necessitatibus, saepe ad adipisci dignissimos ex quisquam.</p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          alt="Pet ID logotype"
          src="/illustration.png"
          className="w-1/2 ml-2"
        /> 
      </div>
    </div>
    </section>
  )
}