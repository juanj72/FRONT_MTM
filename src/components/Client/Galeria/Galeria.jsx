import React, { useEffect, useRef } from 'react';
import './Galeria.scss';
import gsap from 'gsap';

const Galeria = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.children;

    gsap.set(galleryItems, { opacity: 0, y: 50 });

    gsap.to(galleryItems, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="container">
      <div className="guerreros">
        <p className="guerrerostext">Guerreros valientes y fuertes</p>
      </div>
      <div className="gallery" ref={galleryRef}>
        <img className="gallery-image ver1" src="../src/img/image1.jpg" alt="Image 1" />
        <img className="gallery-image ver2" src="../src/img/image2.jpg" alt="Image 2" />
        <img className="gallery-image ver3" src="../src/img/image3.jpg" alt="Image 3" />
        <img className="gallery-image ver4" src="../src/img/image4.jpg" alt="Image 4" />
        <img className="gallery-image ver5" src="../src/img/image5.jpg" alt="Image 5" />
      </div>
      
    </div>
  );
};

export default Galeria;
