import CelebrationSection from "./components/celebration.jsx";
import Carousel from "./components/carousel.jsx"
function App() {
  return (
      <>

        <div className="relative h-screen bg-black text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/img/bg.webp)' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-4xl font-bold mb-4">INNER FIRE</h2>
            <p className="text-lg mb-6">Discover</p>
            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300">
              Discover More
            </button>
          </div>
        </div>

       <CelebrationSection/>
          <Carousel />
      </>
  );
}

export default App;
