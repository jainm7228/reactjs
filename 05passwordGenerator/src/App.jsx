import { useState, useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
    const [length,setLength]=useState(8)
    const [numAllow,setNum]=useState(false)
    const [charAllow,setChar]=useState(false)
    const [password, setPassword] = useState("")

    //useref hook
    const passwordRef = useRef(null)

    const passwordGenerator =useCallback(()=>{
      let pass= ""
      let str= "ABCDEFGHIJKLMOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numAllow) str+= "0123456789" 
      if (charAllow) str+="!@#$%^&*-_=+[]{}~`/\\|?<>,.;:"
    
      
      
      for (let i=1;i<=length;i++) {
        let char = Math.floor(Math.random()*str.length + 1) 
        pass += str.charAt(char)

      }


      setPassword(pass)
       
    },[length,numAllow,charAllow,setPassword]) 

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
        passwordRef.current?.setSelectionRange(0,999)
         // .then(() => alert("Password copied)"), err => console.log(err))
    },[password])


    useEffect(()=>{
      passwordGenerator()

    },[passwordGenerator, length, numAllow, charAllow])
    
  
  return (
    <>
          <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-500 bg-gray-700'>
            <h1 className='text-white text-center my-2'>Generate a Password</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'
            >
              <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
              /> 
              <button onClick={copyPasswordToClipboard} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 shrink-0'>copy</button>
            </div>


            

            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input
                 type="range" 
                 min={6}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e)=> {setLength(e.target.value)}}

                 />
                 <label >Length:{length}</ label>
              </div>


              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numAllow}
                id="numberInput"
                onChange={()=>{
                  setNum((prev)=>!prev);
                }}
                />

                <label htmlFor="numberInput">Number</label>


              </div>

              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={charAllow}
                id="charInput"
                onChange={()=>{
                  setChar((prev)=>!prev);
                }}
                />

                <label htmlFor="charInput">Character</label>


              </div>

              

              
            </div>

            
            
      </div>
    </>
  )
}

export default App
