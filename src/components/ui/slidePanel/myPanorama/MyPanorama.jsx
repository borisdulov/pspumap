const MyPanorama = () => {
  return (
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
  );
}

export default MyPanorama;