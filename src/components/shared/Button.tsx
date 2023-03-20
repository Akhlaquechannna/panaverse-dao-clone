import { FC } from "react"


const Botton:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-[#005e6c] text-white px-7 py-4 rounded-full hover:shadow-lg
    text-xl font-medium hover:scale-105 duration-300
    
    ">{text}</button>
  )
}

export default Botton



// const Botton:FC<{text:string}> = ({text}) => {
//   return (
//     <button className="bg-[#00616C] text-white px-7 py-4 rounded-full hover:shadow-lg
//     text-xl font-medium hover:scale-105 duration-300 
//     ">{text}</button>
//   )
// }

// export default Botton