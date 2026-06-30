import CurrentWeather from "./components/CurrentWeather";
import ForcastHeading from "./components/ForcastHeading";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <CurrentWeather />
      <ForcastHeading/>
    </>
  );
};

export default App;
