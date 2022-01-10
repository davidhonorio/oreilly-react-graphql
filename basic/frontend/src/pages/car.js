import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

export const CAR_DETAIL = gql`
  query CarDetail($carId: ID!) {
    car(id: $carId) {
      make
      model
      colour
      year
      speed
    }
  }
`;

export default function Car({ carId }) {

  const { data, loading, error } = useQuery(CAR_DETAIL, {
    variables: {
      carId
    }
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;
  return (
    <Fragment>
      <h2>{data.car.make} - {data.car.model} 🚗</h2>
      <p>Year of production: {data.car.year}</p>
      <p>Maximum speed: {data.car.speed}</p>
      <p>Colour: {data.car.colour}</p>
      <a href="/">Go back</a>
    </Fragment>
  );

}