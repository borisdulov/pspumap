import './floorSelector.css'

export default function FloorSelector({ selectFloor, selectedFloor }) {
  return (
    <div className="floor-selector">
      {
        selectedFloor === 0
          ? <button className="floor-button selected" onClick={() => selectFloor(0)}>UF</button>
          : <button className="floor-button" onClick={() => selectFloor(0)}>UF</button>
      }
      {
        selectedFloor === 1
          ? <button className="floor-button selected" onClick={() => selectFloor(1)}>1F</button>
          : <button className="floor-button" onClick={() => selectFloor(1)}>1F</button>
      }
      {
        selectedFloor === 2
          ? <button className="floor-button selected" onClick={() => selectFloor(2)}>2F</button>
          : <button className="floor-button" onClick={() => selectFloor(2)}>2F</button>
      }
      {
        selectedFloor === 3
          ? <button className="floor-button selected" onClick={() => selectFloor(3)}>3F</button>
          : <button className="floor-button" onClick={() => selectFloor(3)}>3F</button>
      }
      {
        selectedFloor === 4
          ? <button className="floor-button selected" onClick={() => selectFloor(4)}>4F</button>
          : <button className="floor-button" onClick={() => selectFloor(4)}>4F</button>
      }
    </div>
  )
}