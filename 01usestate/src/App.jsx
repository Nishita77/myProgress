import { useState , useCallback, useEffect} from 'react'
function App() {
 let[count, setCount] = useState(0)
 let[bgcolor,setbgcolor]= useState("bg-black")
 let [randomNumber, setRandomNumber]= useState(null)
 let [WindowWidth,setWindowWidth]= useState(window.innerWidth)



  //counter increase and decrese
  const addvalue = ()=>{
   if(count <10){
    setCount(count+1)
  }
  else{
    setCount(count=10)
  }
}

  const deleteValue= ()=>{
    if(count>0){
      setCount(count-1)
    }
    else{
      setCount(count=0)
    }
  }

  //change background

  const changeBg =(color)=>{
    setbgcolor(color);
  }

  //create random number

  const GenerateRandomNumber = useCallback(()=>{
   const number = Math.floor(Math.random()*100)+1;
   setRandomNumber(number);
  },[]);

  useEffect(() => {
    // Function to update windowWidth state with the current window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
//change bg
    <div className={`${bgcolor} text-lg min-h-screen`}>
   <div className='flex justify-center'>
    <h1 className='text-white'>Tap to change counter Values:</h1>
 
    <button onClick={addvalue}
    className='bg-blue-600 border-white text-white rounded-lg p-2 m-5 '>Increment {count}</button>
  
    
    <button onClick={deleteValue}
    className='bg-blue-600 border-white text-white rounded-lg p-2 m-5'>Decrement {count}</button>
<h1 className='text-white'>Tap to change the background:</h1>
<button onClick= {()=> changeBg("bg-red-500")}
  className='bg-white border-white text-red-600 rounded-lg p-2 m-5 font-bold'
  > red </button>

<button onClick= {()=> changeBg("bg-yellow-500")}
  className='bg-white border-white text-yellow-600 rounded-lg p-2 m-5 font-bold'
  > Yellow </button>


  <button onClick={GenerateRandomNumber}
   className='bg-blue-600 border-white text-white rounded-lg p-2 m-5'
  >Generate Random Number</button>
  {randomNumber!==null && <p className='text-white'>Random Number: {randomNumber}</p>}
   
  <div>
      <h1 className='text-white'>Window Width: {WindowWidth}px</h1>
    </div>
  
   </div>
  </div>
   
  )
}

export default App
