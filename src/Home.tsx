import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Home() {
  // здесь можно считывать vin из state для кастомизации компонентов
  // const { state } = useLocation();
  // const [vin] = useState<Nullable<string>>(state?.vin);

  const [isLost, setIsLost] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://aframe.io/releases/1.6.0/aframe.min.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = './events.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const marker = document.querySelector('a-marker');
    marker?.addEventListener('markerFound', () => {
      console.log('marker found');
      if (isLost) setIsLost(false);
    });
    marker?.addEventListener('markerLost', () => {
      console.log('marker lost');
      if (!isLost) setIsLost(true);
    });
  }, [isLost]);

  return (
    <>
      {isLost && (
        <div className="arjs-lost">
          <div>Marker is lost. Please...</div>
        </div>
      )}

      <a-scene
        embedded
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
      >
        <a-assets>
          <a-asset-item id="animated-asset" src="lion.glb"></a-asset-item>
        </a-assets>

        <a-marker
          markerhandler
          emitevents="true"
          cursor="rayOrigin: mouse"
          id="animated-marker"
          preset="hiro"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5"
        >
          <a-entity
            id="animated-model"
            gltf-model="#animated-asset"
            scale="1 1 1"
            rotation="-45 -90 90"
          ></a-entity>
        </a-marker>

        <a-entity id="rig" position="0 0 0">
          <a-entity camera>
            <a-cursor color="#FAFAFA"></a-cursor>
          </a-entity>
        </a-entity>
      </a-scene>
    </>
  );
}
