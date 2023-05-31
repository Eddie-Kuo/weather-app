'use client';

import { Country, City, State } from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select';
import { GlobeAltIcon, LocationMarkerIcon } from '@heroicons/react/solid';

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type stateOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
    name: string;
    countryCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

export default function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedState, setSelectedState] = useState<stateOption>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  function handleSelectedCountry(option: option) {
    setSelectedCountry(option);
    setSelectedState(null);
  }
  function handleSelectedState(option: stateOption) {
    setSelectedState(option);
    setSelectedCity(null);
  }
  function handleSelectedCity(option: cityOption) {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2 text-white/80'>
          <GlobeAltIcon className='h-5 w-5 text-white' />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          className='text-black'
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>

      {selectedCountry && (
        <div className='flex flex-row space-x-2'>
          <div className='space-y-2 w-full'>
            <div className='flex items-center space-x-2 text-white/80'>
              <LocationMarkerIcon className='h-5 w-5 text-white' />
              <label htmlFor='country'>State</label>
            </div>
            <Select
              className='text-black'
              value={selectedState}
              onChange={handleSelectedState}
              options={State.getStatesOfCountry(
                selectedCountry.value.isoCode
              )?.map((prov) => ({
                value: {
                  latitude: prov.latitude!,
                  longitude: prov.longitude!,
                  isoCode: prov.isoCode,
                  name: prov.name,
                  countryCode: prov.countryCode,
                },
                label: prov.name,
              }))}
            />
          </div>
          <div className='space-y-2 w-full'>
            <div className='flex items-center space-x-2 text-white/80'>
              <LocationMarkerIcon className='h-5 w-5 text-white' />
              <label htmlFor='country'>City</label>
            </div>

            {selectedState ? (
              <Select
                className='text-black'
                value={selectedCity}
                onChange={handleSelectedCity}
                options={City.getCitiesOfState(
                  selectedState.value.countryCode,
                  selectedState.value.isoCode
                )?.map((state) => ({
                  value: {
                    latitude: state.latitude!,
                    longitude: state.longitude!,
                    countryCode: state.countryCode,
                    stateCode: state.stateCode,
                    name: state.name,
                  },
                  label: state.name,
                }))}
              />
            ) : (
              <Select />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
