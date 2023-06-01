import React from 'react';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

export default function WeatherPage({ params: { city, lat, long } }: Props) {
  return <div>Welcome to the Weather Page</div>;
}
