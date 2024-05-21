import { Pannellum } from "pannellum-react";
import React, { useState } from 'react'

import './slidePanel.css'

export default function SlidePanel(currentFloor) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className={`panel ${isPanelOpen ? 'open' : 'closed'}`}>
      <Pannellum
        image="/pano.jpg"
        hfov={130 * (window.innerWidth / window.innerHeight / 2)}
        autoRotate={-2}
        autoLoad={true}
        mouseZoom={false}
        height="100%"
        minHfov={10}
        showZoomCtrl={false}
        compass={false}
        showFullscreenCtrl={false}/>
      <button className="panel-button" onClick={togglePanel}>{isPanelOpen ? 'Close' : 'Open'} panorama view</button>
    </div>
  )
}