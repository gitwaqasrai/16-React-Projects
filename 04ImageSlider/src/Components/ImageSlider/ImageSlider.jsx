/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, pages, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchSliderImg(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?pages=${pages}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  function handlePrev() {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }

  function handleNext() {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }

  useEffect(() => {
    if (url !== "") fetchSliderImg(url);
  }, [url]);

  if (loading) {
    return (
      <div className="text-center text-lg font-semibold">Loading.......</div>
    );
  }
  if (error !== null) {
    return (
      <div className="text-center text-lg font-semibold text-red-500">
        Error loading images
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[450px] h-[400px] overflow-hidden shadow-lg rounded-[1rem] bg-white">
        <BsArrowLeftCircleFill
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[2.5rem] h-[2.5rem] text-white cursor-pointer bg-black/50 rounded-full transition-transform duration-200 hover:scale-110 z-10"
        />

        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                className={
                  currentSlider === index
                    ? "w-full h-full object-cover rounded-[1rem] transition-opacity duration-500 ease-in-out opacity-100"
                    : "w-full h-full object-cover rounded-[1rem] transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0"
                }
                src={imageItem.download_url}
                alt={imageItem.download_url}
                key={index}
              />
            ))
          : null}

        <span className="absolute bottom-[1.5rem] flex items-center gap-2 justify-center w-full">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  onClick={() => setCurrentSlider(index)}
                  className={
                    currentSlider === index
                      ? "w-[15px] h-[15px] rounded-[50%] bg-white border-2 border-gray-500"
                      : "w-[12px] h-[12px] rounded-[50%] bg-gray-600"
                  }
                  key={index}
                ></button>
              ))
            : null}
        </span>

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[2.5rem] h-[2.5rem] text-white cursor-pointer bg-black/50 rounded-full transition-transform duration-200 hover:scale-110 z-10"
        />
      </div>
    </div>
  );
}

export default ImageSlider;
