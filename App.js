import React, { useEffect, useState } from "react";
import { ScrollView, ImageBackground } from "react-native";

import ForecastSearch from "./components/ForecastSearch";
import CurrentForecast from "./components/CurrentForecast";
import DailyForecast from "./components/DailyForecast";

import styled from "styled-components/native";
import { backgroundSwitch } from "./Helpers/BackSwitch";

const App = () => {
  const [toggleSearch, setToggleSearch] = useState("city")
  const [city, setCity] = useState("Paris");
  const [postalCode, setPostalCode] = useState("")
  const [lat, setLat] = useState(48.856614)
  const [long, setLong] = useState(2.3522219);
  const [weather, setWeather] = useState({})

  const controller = new AbortController()
  const signal = controller.signal;
  const GOOGLE_KEY = 'AIzaSyA70q5avRjcune-c0tsfF2gK0codW1kgMc' 
  const API_KEY = '5dd626f3eb3ba9cf9229e81a70218d18'

  console.log (weather)

  //Api lat long par ville
  const fetchLatLongHandler = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&camp&units=metric&lang=fr&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data.coord.lat)
        setLong(data.coord.lon)
      })
      .catch(e => {
        setLat(48.856614)
        setLong(2.3522219)
      })

   
  };

  //fetch lat long par code postal
  const fetchByPostalHandler = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_KEY}&camp&units=metric&lang=fr&address=${postalCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLat(data.results[0].geometry.location.lat)
        setLong(data.results[0].geometry.location.lng)
      }).catch(e => {
        setLat(48.856614)
        setLong(2.3522219)
      })
  }

  //updates the weather when lat long changes
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&lang=fr&units=metric&appid=${API_KEY}`,
      { signal }
    )
      .then((res) => res.json())
      .then((data) => {
        const dataCopy = { 
        ...data,
        ville : city
      };
        setWeather(dataCopy);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [lat, long]);

  return (
    <Container>
      <ImageBackground source={backgroundSwitch(weather.current?.weather[0]?.icon)} style={{ width: "100%", height: "100%" }}>
        <ForecastSearch
          city={city}
          setCity={setCity}
          fetchLatLongHandler={fetchLatLongHandler}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          fetchByPostalHandler={fetchByPostalHandler}
          setPostalCode={setPostalCode}
          postalCode={postalCode}
        />
        <CurrentForecast currentWeather={weather} timezone={weather.timezone} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
          <FutureForecastContainer>
            {weather.daily ? (
              weather.daily.map((day, index) => {
                if (index !== 0) {
                  return <DailyForecast key={day.dt} day={day} index={index} />;
                }
              })
            ) : (
              <NoWeather>Pas de Meteo à afficher</NoWeather>
            )}
          </FutureForecastContainer>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
