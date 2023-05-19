import React, { useEffect, useState } from "react";
import WeatherIcon from "./WeatherIcon";
import { WiDegrees } from "react-icons/wi";
import Box from "./Box";

const WeatherApp = ({ data }) => {
  const [time, setTime] = useState(data.datetime);
  const [day, setDay] = useState(false);

  useEffect(() => {
    const hour = time.substring(11, 2);
    if (hour >= 6 && hour < 18) {
      setDay(true);
    }
  }, []);

  return (
    <>
      <div className="w-full flex flex-col p-2 gap-2 dark:text-darkMode-txt">
        <div className="w-full h-fit flex justify-between px-4 text-2xl">
          <span>{`${data.city_name}, ${data.country_code}`}</span>
          <span className="">{true ? "in F" : "in C"}</span>
        </div>
        <div className="w-full flex gap-2  sm:flex-row flex-col">
          <div className="w-full h-[25rem] sm:w-1/2 flex flex-col gap-2 justify-evenly shadow-xl">
            <div className="h-fit flex items-center justify-center gap-2">
              <WeatherIcon code={data.weather.code} day={day} />
              <div className="flex items-start text-4xl">
                <span className="text-6xl">{data.temp}</span>
                <WiDegrees />
              </div>
            </div>
            <div className="h-fit text-2xl text-center">
              {data.weather.description}
            </div>
            <div className="w-full h-fit text-lg flex flex-col gap-2 py-2 px-4">
              <Box title="Air Quality" value={data.aqi} />
              <Box title="Sunrise" value={data.sunrise} />
              <Box title="Sunset" value={data.sunset} />
              <Box title="Timezone" value={data.timezone} />
            </div>
          </div>
          <div className="w-full h-[25rem] sm:w-1/2 text-lg flex flex-col gap-2 py-2 px-4 justify-evenly shadow-xl">
            <div>Feels like {data.app_temp}</div>
            <Box title="Humidity" value={data.rh} />
            <Box title="Wind Speed" value={data.wind_spd} />
            <Box title="Pressure" value={data.pres} />
            <Box title="Dew Point" value={data.dewpt} />

            <Box title="Visibility" value={data.vis} />
            <Box title="Cloud Coverage" value={data.clouds} />
            <Box title="Precipitation" value={data.precip} />
            <Box title="Snow" value={data.snow} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
