import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import Card from "../../../components/Card";
import { WeatherInfoProps } from "../interface";

const WeatherDetails: React.FC<WeatherInfoProps> = ({ data, loading }) => {
  const [sunrise, setSunrise] = useState<string>("");
  const [sunset, setSunset] = useState<string>("");

  const timeAm = data?.sys?.sunrise;
  const timePm = data?.sys?.sunset;

  useEffect(() => {
    const timeConverter = (time: number) => {
      const date = new Date(time * 1000);
      let hours = date.getHours();
      const minutes = date.getMinutes();

      hours = hours % 12 || 12;

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const formattedTime = `${hours}:${formattedMinutes}`;
      return formattedTime;
    };

    if (timeAm) {
      setSunrise(timeConverter(timeAm));
    }

    if (timePm) {
      setSunset(timeConverter(timePm));
    }
  }, [timeAm, timePm]);

  return (
    <div className="w-full p-5 bg-white rounded-lg shadow md:w-full lg:w-5/6 bg-gradient-to-b from-white to-blue-500">
      <div className=" space-y-4 h md:space-y-6  ">
        <div className="flex flex-col">
          <div className="flex gap-5 mb-5 text-center p-2 ">
            <Card title={"Temps °C (High / Low)"}>
              {loading ? (
                <DNA
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              ) : (
                `${data?.main?.temp_max.toFixed(1) ?? 0}°C / ${
                  data?.main?.temp_min.toFixed(1) ?? 0
                }°C`
              )}
            </Card>
            <Card title={"Humidity / hPA"}>
              {loading ? (
                <DNA
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              ) : (
                `${data?.main?.humidity ?? 0}% / ${data?.main?.pressure ?? 0}`
              )}
            </Card>
          </div>
          <div className="flex gap-5 mb-5  text-center">
            <Card title={"Wind speed"}>
              {loading ? (
                <DNA
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              ) : (
                `${data?.wind?.speed ?? 0} m/s`
              )}
            </Card>
            <Card title={"Sunrise / Sunset"}>
              {loading ? (
                <DNA
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              ) : (
                `${sunrise}AM / ${sunset}PM`
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
