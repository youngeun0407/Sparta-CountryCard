import React from "react";
import styled from "styled-components";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <Container>
      <Section>
        <Title>선택된 목록</Title>
        <CountryGrid>
          {selectedCountries.map((country: Country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          ))}
        </CountryGrid>
      </Section>
      <Section>
        <Title>나라 목록</Title>
        <CountryGrid>
          {countries.map((country: Country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          ))}
        </CountryGrid>
      </Section>
    </Container>
  );
};

export default CountryList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const CountryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
