import { create } from "zustand";

interface WeatherStore{
    city: string;
    setcity: (city: string) => void;
}

const useWeatherStore = create<WeatherStore>((set)=>({
    city:"",
    setcity:(city: string) => set({city:city}),
}))

export default useWeatherStore;