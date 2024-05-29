import { Pannellum } from "pannellum-react";
import React, { useState } from 'react'

import './slidePanel.css'
import MyPanorama from "./myPanorama/MyPanorama";

export default function SlidePanel({ isPanelOpen, panoName, setIsPanelOpen }) {
  return (
    <>
      <div className={`panel ${isPanelOpen ? 'open' : 'closed'}`}>
        <MyPanorama panoName={panoName}/>
      </div>
      <button
        className={`panel-button ${isPanelOpen ? 'active' : 'hidden'}`}
        onClick={() => setIsPanelOpen(false)}>Close</button>
    </>
  )
}