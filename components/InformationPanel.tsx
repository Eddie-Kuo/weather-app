import React from 'react';
import CityPicker from './CityPicker';

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};

export default function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className='bg-gradient-to-br from-slate-400 to-slate-700 text-white p-10'>
      <div className='pb-5'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='test-xs text-gray-300'>
          Long/Lat: {long}, {lat}{' '}
        </p>
      </div>

      <CityPicker />

      <hr className='my-10' />

      <div className='mt-5 flex items-center justify-between space-x-10 mb-5'></div>
    </div>
  );
}
