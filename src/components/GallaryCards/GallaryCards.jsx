import { useEffect, useState } from "react";
import "./GallaryCards.css";
import AOS from "aos";

const images = [
  { id: 1, src: "/src/assets/images/Gallary/l1.webp", delay: 0 },
  { id: 2, src: "/src/assets/images/Gallary/l2.webp", delay: 100 },
  { id: 3, src: "/src/assets/images/Gallary/l3.webp", delay: 200 },
  { id: 4, src: "/src/assets/images/Gallary/l4.webp", delay: 300 },
  { id: 5, src: "/src/assets/images/Gallary/l5.webp", delay: 0 },
  { id: 6, src: "/src/assets/images/Gallary/l6.webp", delay: 100 },
  { id: 7, src: "/src/assets/images/Gallary/l7.webp", delay: 200 },
  { id: 8, src: "/src/assets/images/Gallary/l8.webp", delay: 300 },
  { id: 9, src: "/src/assets/images/Gallary/l9.webp", delay: 0 },
  { id: 10, src: "/src/assets/images/Gallary/l10.webp", delay: 100 },
  { id: 11, src: "/src/assets/images/Gallary/l11.webp", delay: 200 },
  { id: 12, src: "/src/assets/images/Gallary/l12.webp", delay: 300 },
];

const GallaryCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery-grid" data-aos="fade-up">
        {images.map((img) => (
          <div
            className="gallery-item"
            key={img.id}
            onClick={() => setSelectedImage(img.src)}
            data-aos="fade-right"
            data-aos-delay={img.delay}
          >
            <img src={img.src} alt={`Gallery ${img.id}`} />
            <div className="overlay">
              <span>View Image</span>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" className="popup-img" />
        </div>
      )}
    </>
  );
};

export default GallaryCards;
