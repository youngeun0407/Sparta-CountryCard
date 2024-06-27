import React from "react";
import styled from "styled-components";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <Card onClick={() => handleSelectCountry(country)}>
      <Flag src={country.flags.svg} alt={`${country.name.common} flag`} />
      <CountryName>{country.name.common}</CountryName>
    </Card>
  );
};

export default CountryCard;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 150px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Flag = styled.img`
  width: 40px;
  height: 40px;
`;

const CountryName = styled.h3`
  margin: 10px 0 0;
`;
