import React, { useEffect, useRef } from 'react';
import "./earth.css"
import Globe from 'globe.gl';

const Earth = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    // تهيئة كائن Globe
    const globe = Globe()(globeRef.current);

    // تعيين صورة الأرض
    globe
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .backgroundColor('rgba(0,0,0,0)'); // خلفية شفافة
  }, []);

  return (
    <div
      ref={globeRef}
      className="earth-container"
      style={{
        width: '100%',
        height: '80vh', // تحديد الارتفاع
        maxWidth: '800px', // العرض الأقصى للكرة الأرضية
        margin: '0 auto', // توسيط الكرة الأرضية
        overflow: 'hidden',
      }}
    />
  );
};

export default Earth;
