import { Pannellum } from 'pannellum-react';

const MyPanorama = ({ panoName }) => {
  return (
    <div className='pano'>
      <Pannellum
        image={'/' + panoName + '.png'}
        hfov={170 * (window.innerWidth / window.innerHeight / 2)}
        autoLoad={true}
        mouseZoom={true}
        height="100%"
        minHfov={10}
        showZoomCtrl={false}
        compass={false}
        showFullscreenCtrl={false}
        autoRotate={-2}>
      </Pannellum>
    </div>
  );
}

export default MyPanorama;