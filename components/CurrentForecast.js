import React from "react";
import styled from "styled-components/native";

const CurrentForecast = ({ currentWeather }) => {

  const toto = currentWeather.timezone;
  console.log(toto);



  return (
    <CurrentView>
      <CityName>{currentWeather.ville ?? ""}</CityName>
      <ContainerPrincipal>
        <CurrentTempView>
          {currentWeather.current && (
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
              }}
              resizeMode={"contain"}
            />
          )}
          <CurrentDegrees>
            {Math.round(currentWeather.current && currentWeather.current.temp)}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.current &&
            currentWeather.current.weather[0].description}
        </Description>
      </ContainerPrincipal>
      <ContainerSecondaire>
        <Row>
          <Card>
            <Label>Ressenti</Label>
            <Info>
              {currentWeather.current &&
                Math.round(currentWeather.current.feels_like)}
              °C
            </Info>
          </Card>
          <Card>
            <Label>Basse</Label>
            <Info>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.min)}
              °C
            </Info>
          </Card>
          <Card>
            <Label>Haute</Label>
            <Info>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.max)}
              °C
            </Info>
          </Card>
        </Row>
        <Row>
          <Card>
            <Label>Vent</Label>
            <Info>
              {currentWeather.current && currentWeather.current.wind_speed} m/s
            </Info>
          </Card>
          <Card>
            <Label>Humidité</Label>
            <Info>
              {currentWeather.current && currentWeather.current.humidity}%
            </Info>
          </Card>
          <Card>
            <Label>Pluie</Label>
            <Info>
              {currentWeather.daily > 0 ? currentWeather.daily[0].rain : "0"} MM
            </Info>
          </Card>
        </Row>
      </ContainerSecondaire>
    </CurrentView>
  );
};

const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ContainerPrincipal = styled.View`
  display: flex;
  align-items: center;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

const ContainerSecondaire = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  width: 95%;
  max-width: 478px;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const CityName = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 40px;
`;

const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 60px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: black;
  padding: 10px 30px;
`;

const Card = styled.View`
  display: flex;
`;

const Label = styled.Text`
  font-size: 18px;
`;

const Info = styled.Text`
  color: black;
  font-size: 15px;
  text-transform: capitalize;
`;

export default CurrentForecast;
