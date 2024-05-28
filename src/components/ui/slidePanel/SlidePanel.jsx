import { Pannellum } from "pannellum-react";
import React, { useState } from 'react'

import './slidePanel.css'
import MyPanorama from "./myPanorama/MyPanorama";

export default function SlidePanel({ isPanelOpen, panoName, setIsPanelOpen }) {
  return (
    <>
      <div className={`panel ${isPanelOpen ? 'open' : 'closed'}`}>
        <MyPanorama panoName={panoName}/>
        <button className="panel-button" onClick={() => setIsPanelOpen(false)}>Close panorama view</button>
      </div>
    </>
  )
}