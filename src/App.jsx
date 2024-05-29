import './App.css'
import { Suspense, useState } from 'react'
import Header from './components/ui/header/Header'
import FloorSelector from './components/ui/floorSelector/FloorSelector'
import MyScene from './components/scene/MyScene'
import SlidePanel from './components/ui/slidePanel/SlidePanel'

export default function App() {
  const [currentFloor, setFloor] = useState(1)
  const [panoName, setPanoName] = useState('')
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  function openPano(panoName) {
    setPanoName(panoName)
    setIsPanelOpen(true)
    console.log(isPanelOpen)
  }

  return (
    <div className='App'>
      <MyScene currentFloor={currentFloor} openPano={openPano} />
      <FloorSelector setFloor={setFloor} currentFloor={currentFloor} />
      <SlidePanel isPanelOpen={isPanelOpen} panoName={panoName} setIsPanelOpen={setIsPanelOpen}/>
      <Header />
    </div>
  )
}