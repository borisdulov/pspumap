import React from 'react'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'

import './slidePanel.css'
// import MyPanorama from "./myPanorama/MyPanorama";

export default function SlidePanel({ isPanelOpen, panoName, setIsPanelOpen }) {
  return (
    <>
      <div className={`panel ${isPanelOpen ? 'open' : 'closed'}`}>
        <ReactPhotoSphereViewer
          src="left.png"
          height={'100%'}
          width={"100%"}
        />
      </div>
      <button
        className={`panel-button ${isPanelOpen ? 'active' : 'hidden'}`}
        onClick={() => setIsPanelOpen(false)}>Close</button>
    </>
  )
}