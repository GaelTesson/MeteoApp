import React from "react";
import styled from "styled-components/native";

const ForecastSearch = ({
  toggleSearch,
  setToggleSearch,
  city,
  setCity,
  fetchLatLongHandler,
  fetchByPostalHandler,
  setPostalCode,
  postalCode,
}) => {
  const handleSubmit = (e) => {
    if (toggleSearch === "city") {
      fetchLatLongHandler();
    }
    if (toggleSearch === "postal") {
      fetchByPostalHandler();
    }
  };

  const setToggleByCity = () => {
    setToggleSearch("city");
  };

  const setToggleByPostal = () => {
    setToggleSearch("postal");
  };

  return (
    <Container>
      <SearchBy>
        <Buttons
          title="Ville"
          color={toggleSearch === "city" ? "white" : "rgba(255, 255, 255, 0.6)"}
          accessibilityLabel="Rechercher par Ville"  
          onPress={setToggleByCity}
        />
        <Buttons
          title="Code Postal"
          color={toggleSearch === "city" ? "rgba(255, 255, 255, 0.6)" : "white"}
          accessibilityLabel="Recherche par Code Postal"
          onPress={setToggleByPostal}
        />
      </SearchBy>

      <SearchCity
        onChangeText={toggleSearch === "city" ? setCity : setPostalCode}
        value={toggleSearch === "city" ? city : postalCode}
        placeholder={
          toggleSearch === "city" ? "Recherche par Ville" : "Recherche par Code Postal"
        }
        onSubmitEditing={handleSubmit}
      />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-left: 0px;
`;

const Buttons = styled.Button`
  color: black;
  background-color: gray;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;

const SearchBy = styled.View`
  display: flex;
  flex-direction: row;
  color: white;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 700px;
`;

const SearchCity = styled.TextInput`
  height: 50px;
  margin: 12px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  width: 95%;
  max-width: 700px;
`;

export default ForecastSearch;
