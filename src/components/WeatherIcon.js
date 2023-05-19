import React from "react";
import {
  WiDayCloudy,
  WiDayFog,
  WiDayStormShowers,
  WiDayThunderstorm,
  WiShowers,
  WiRain,
  WiRainWind,
  WiSnow,
  WiNightCloudy,
  WiNightFog,
  WiNightStormShowers,
  WiNightThunderstorm,
} from "react-icons/wi";

const WeatherIcon = ({ code, day }) => {
  return (
    <>
      <div className="text-9xl pr-4">
        {code < 230 ? (
          day ? (
            <WiDayStormShowers />
          ) : (
            <WiNightStormShowers />
          )
        ) : code < 300 ? (
          day ? (
            <WiDayThunderstorm />
          ) : (
            <WiNightThunderstorm />
          )
        ) : code < 500 ? (
          <WiShowers />
        ) : code < 600 ? (
          <WiRain />
        ) : code < 700 ? (
          <WiSnow />
        ) : code < 800 ? (
          day ? (
            <WiDayFog />
          ) : (
            <WiNightFog />
          )
        ) : code === 800 ? (
          day ? (
            <WiDaySunny />
          ) : (
            <WiNightClear />
          )
        ) : code < 900 ? (
          day ? (
            <WiDayCloudy />
          ) : (
            <WiNightCloudy />
          )
        ) : (
          <WiRainWind />
        )}
      </div>
    </>
  );
};

export default WeatherIcon;
