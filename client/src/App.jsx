import Navbar from "./components/navbar";
import HomeBanner from "./components/home/homeBanner";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-homeBg bg-bottom bg-no-repeat bg-cover">
        <Navbar />
        <HomeBanner />
      </div>
    </>
  );
}

export default App;
