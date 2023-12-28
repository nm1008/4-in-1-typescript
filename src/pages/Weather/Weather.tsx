import { useEffect, useState } from "react";

import axios from "axios";
import WeatherData from "./interface";

import Button from "../../components/Button";
import WeatherInfo from "./WeatherData/WeatherInfo";
import WeatherDetails from "./WeatherData/WeatherDetails";

const Weather = () => {
  const [country, setCountry] = useState("Manila");
  const [selectedCountry, setSelectedCountry] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then((res) => {
        console.log(res);
        setSelectedCountry(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  const handleSearchCountry = async () => {
    setLoading(true);
    axios
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then((res) => {
        setSelectedCountry(res.data);
        setLoading(false);
      })
      .catch((error: string) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  return (
    <section className="h-full bg-gradient-to-b from-white to-blue-500 md:h-screen">
      <div className="container mx-auto py-5 flex items-center flex-col">
        <h1 className="font-bold mb-5 py-5 text-center text-md md:text-3xl">
          React Weather App
        </h1>
        <div className="w-5/6 lg:py-0 md:w-5/6">
          <div className="flex flex-col gap-5 items-center justify-center p-5 mb-5 w-full md:flex-row">
            <input
              type="text"
              className="text-center w-full h-14  rounded-3xl font-md border-4 md:w-full md:pl-5 md:text-left lg:w-3/4"
              placeholder="Search city name here.."
              onChange={(e) => setCountry(e.target.value)}
            />

            <Button onClick={handleSearchCountry} color={"bg-blue-600"}>
              Search
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-start gap-10 md:flex-nowrap">
          <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
            <h1 className="text-center text-3xl font-bold mb-5">Weather</h1>

            <WeatherInfo data={selectedCountry} loading={loading} />
          </div>
          <div className="w-full flex items-center justify-center flex-col md:w-1/2 mx-5">
            <h1 className="text-center text-3xl font-bold mb-5">Details</h1>
            <WeatherDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
