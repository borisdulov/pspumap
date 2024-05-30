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

// import * as Pannellum from 'pannellum';

// const MyPanorama = ({ panoName }) => {
//   const viewer = Pannellum.Viewer(document.getElementById('pannellum-container'));

//   viewer.setPanorama('/' + panoName + '.png');
//   viewer.setHfov(150 * (window.innerWidth / window.innerHeight / 2));
//   viewer.setAutoLoad(true);
//   viewer.setMouseZoom(true);
//   viewer.setMinHfov(10);
//   viewer.setShowZoomCtrl(false);
//   viewer.setCompass(false);
//   viewer.setShowFullscreenCtrl(false);
//   viewer.setAutoRotate(-2);

//   return (
//     <div className='pano'>
//       <div id='pannellum-container' style={{ height: '100%' }} />
//     </div>
//   );
// }

// export default MyPanorama;