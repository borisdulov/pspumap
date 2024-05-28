import './floorSelector.css'

export default function FloorSelector({ setFloor, currentFloor }) {
  return (
    <div className="floor-selector">
      {
        currentFloor === 0
          ? <button className="floor-button active" onClick={() => setFloor(0)}>UF</button>
          : <button className="floor-button" onClick={() => setFloor(0)}>UF</button>
      }
      {
        currentFloor === 1
          ? <button className="floor-button active" onClick={() => setFloor(1)}>1F</button>
          : <button className="floor-button" onClick={() => setFloor(1)}>1F</button>
      }
      {
        currentFloor === 2
          ? <button className="floor-button active" onClick={() => setFloor(2)}>2F</button>
          : <button className="floor-button" onClick={() => setFloor(2)}>2F</button>
      }
      {
        currentFloor === 3
          ? <button className="floor-button active" onClick={() => setFloor(3)}>3F</button>
          : <button className="floor-button" onClick={() => setFloor(3)}>3F</button>
      }
      {
        currentFloor === 4
          ? <button className="floor-button active" onClick={() => setFloor(4)}>4F</button>
          : <button className="floor-button" onClick={() => setFloor(4)}>4F</button>
      }
    </div>
  )
}