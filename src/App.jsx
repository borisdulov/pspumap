import './App.css'
import { useState } from 'react'
import Header from './components/ui/header/Header'
import FloorSelector from './components/ui/floorSelector/FloorSelector'
import MyScene from './components/scene/MyScene'
import SlidePanel from './components/ui/slidePanel/SlidePanel'

export default function App() {
  const [currentFloor, setFloor] = useState(1)
  console.log(currentFloor)

  const floorSelectHandler = (floor) => {
    setFloor(floor)
  }

  return (
    <div className='App'>
      <MyScene floorToDraw={currentFloor}/>
      <FloorSelector selectFloor={floorSelectHandler} selectedFloor={currentFloor} />
      <SlidePanel />
      <Header />
    </div>
  )
}