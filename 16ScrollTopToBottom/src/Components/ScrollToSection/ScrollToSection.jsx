import { useRef } from "react";

function ScrollToSection() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const contectRef = useRef();
  const data = [
    {
      label: "Home",
      ref: homeRef,
      style:
        "w-full h-[600px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex items-center justify-center text-3xl",
    },
    {
      label: "About",
      ref: aboutRef,
      style:
        "w-full h-[600px] bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-white flex items-center justify-center text-3xl",
    },
    {
      label: "Services",
      ref: serviceRef,
      style:
        "w-full h-[600px] bg-gradient-to-r from-green-400 via-yellow-400 to-orange-500 text-white flex items-center justify-center text-3xl",
    },
    {
      label: "Contect",
      ref: contectRef,
      style:
        "w-full h-[600px] bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white flex items-center justify-center text-3xl",
    },
  ];

  function handleScrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="space-y-6">
      <h1 className="text-center text-4xl font-bold mt-8 text-gray-800">
        Scroll To Particular Section
      </h1>
      <div className="flex justify-center space-x-4">
        {data.map((dataItem, index) => (
          <button
            key={index}
            onClick={() => handleScrollToSection(dataItem.ref)}
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
          >
            {dataItem.label}
          </button>
        ))}
      </div>

      {data.map((dataItem, index) => (
        <div ref={dataItem.ref} key={index} className={dataItem.style}>
          {dataItem.label}
        </div>
      ))}
    </div>
  );
}

export default ScrollToSection;
