import { SunIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Loading() {
  return (
    <div className='bg-gradient-to-br from-slate-400 to-slate-700 min-h-screen flex flex-col items-center justify-center text-white'>
      <SunIcon
        className='h-24 w-24 animate-bounce text-yellow-500'
        color='yellow'
      />
      <h1 className='text-4xl font-bold text-center mb-10 animate-pulse'>
        Loading City Weather Information
      </h1>
      <h2 className='text-xl font-bold text-center mb-10 animate-pulse'>
        Hold on, we are crunching the numbers for the weather of the selected
        city!
      </h2>
    </div>
  );
}
