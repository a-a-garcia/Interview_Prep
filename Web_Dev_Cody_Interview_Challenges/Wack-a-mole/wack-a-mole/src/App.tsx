import './App.css'
import hole from './assets/hole.jpg'
import mole from './assets/mole.jpg'
import {useEffect, useState} from 'react';

function App() {
  const [score, setScore] = useState(0)
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false));

  function setMoleVisibility(index:number, isVisible: boolean) {
    setMoles((curMoles) => {
      const newMoles = [...curMoles];
      newMoles[index] = isVisible
      return newMoles
    })
  }

  function wackMole(index: number) {
    if (!moles[index]) return;
    setMoleVisibility(index, false)
    setScore((score) => score+1)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      // finding a random number and flooring it so it creates an index
      setMoleVisibility(randomIndex, true)
      setTimeout(() => {
        setMoleVisibility(randomIndex, false)
      }, 700)
    }, 1000);

    //standard cleanup in react for intervals
    return () => {
      clearInterval(interval)
    }
  }, [moles])
  // we must add moles to our dependency array so that the effect will reinitialize with randomIndex interval everytime the moles array changes


  return (
    <>
      <>
        <h1>Score {score}</h1>
      </>
    <div className='grid'>
     {moles.map((isMole, idx) => <img key={idx}
     src={isMole ? mole : hole} 
     onClick={() => {
      wackMole(idx)
     }}>
     </img>)}
    </div>
    </>
  )
}

export default App
