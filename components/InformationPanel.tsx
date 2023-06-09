import weatherCodeToString from '@/lib/weatherCodeToString';
import { SunIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import CityPicker from './CityPicker';

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentTime = new Date().toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

export default function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className='bg-gradient-to-br from-slate-400 to-slate-700 text-white py-10 px-14'>
      <div className='pb-5'>
        <h1 className='text-6xl font-bold'>{decodeURI(city)}</h1>
        <p className='test-xs text-gray-300'>
          Long/Lat: {long}, {lat}{' '}
        </p>
      </div>

      <CityPicker />

      <hr className='my-10' />

      <div className='mt-5 flex items-center justify-between space-x-10 mb-5'>
        <div>
          <p className='text-xl'>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <p className='font-extralight'>
            Timezone: <br /> {timeZone}
          </p>
        </div>

        <p className='text-lg font-bold uppercase'>{currentTime}</p>
      </div>

      <hr className='mt-10 mb-5' />

      <div className='flex items-center justify-between'>
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className='flex items-center justify-between space-x-10'>
            <p className='text-5xl font-semibold'>
              {results.current_weather.temperature.toFixed(1)}°F
            </p>

            <p className='text-right font-extralight text-lg'>
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-2 py-5'>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885] '>
          <SunIcon className='h-10 w-10 text-gray-400' />

          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight'>Sunrise</p>
            <p className='uppercase text-2xl'>
              {new Date(results.daily.sunrise[0]).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885] '>
          <SunIcon className='h-10 w-10 text-gray-400' />

          <div className='flex-1 flex justify-between items-center'>
            <p className='font-extralight'>Sunset</p>
            <p className='uppercase text-2xl'>
              {new Date(results.daily.sunset[0]).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
