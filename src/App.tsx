import CurrentWeather from "./components/CurrentWeather";
import Forcast from "./components/Forcast";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <CurrentWeather />
      <Forcast />
    </>
  );
};

export default App;
