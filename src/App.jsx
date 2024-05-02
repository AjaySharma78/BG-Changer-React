import { useState } from 'react';
import './App.css'
import './index.css'
function App() {
  const [color,setColor] = useState('black');
  const [text,setText] = useState('Black')

  return (
    <>
    <div className='w-full h-screen flex justify-center items-center' style={{backgroundColor:color}}>
       <div className={`text-7xl ${['Lavender','Pink','Lime'].includes(text)? 'text-black':'text-white'}`}>{text}</div>
<div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0  '>
  <div className='flex items-center gap-2 bg-slate-700 p-2 rounded-2xl'>
    {["Black","Red","Green","Blue","Pink","Lime","Maroon","Lavender"].map((item,index)=>{
      return (<button key={index} className={` ${['Lavender','Pink','Lime'].includes(item)? 'text-black':'text-white'} text-center py-1 px-3 rounded-3xl`} style={{backgroundColor:item}} onClick={()=> {setColor(item) ;setText(item)}}>{item}</button>);
    })}
  </div>
</div>
</div>
    </>
  )
}

export default App
