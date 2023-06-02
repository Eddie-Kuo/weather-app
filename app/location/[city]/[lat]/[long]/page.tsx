import fetchWeatherQuery from '@/graphQl/queries/fetchWeatherQueries';
import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import StatCard from '@/components/StatCard';
import InformationPanel from '@/components/InformationPanel';
import TempChart from '@/components/TempChart';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

export default async function WeatherPage({
  params: { city, lat, long },
}: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'CST',
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      <InformationPanel city={city} results={results} lat={lat} long={long} />

      <div className='flex-1 p-5 lg:p-10'>
        <div className='p-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Todays Overview</h2>
            <p className='text-sm text-gray-400'>
              Last Updated at:
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>

          <div className='m-2 mb-10'>
            <CalloutCard message='This is where GPT-4 summary will go' />
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
            <StatCard
              title='Maximum Temperature'
              metric={`${results.daily.temperature_2m_max[0]}°`}
              color='yellow'
            />
            <StatCard
              title='Maximum Temperature'
              metric={`${results.daily.temperature_2m_min[0]}°`}
              color='green'
            />

            <div>
              <StatCard
                title='UV Index'
                metric={`${results.daily.uv_index_max[0]}`}
                color='rose'
              />
              {Number(results.daily.uv_index_max[0]) > 5 && (
                <CalloutCard
                  message={'The UV is high today, be sure to wear SPF!!'}
                  alert
                />
              )}
            </div>

            <div className='flex space-x-3'>
              <StatCard
                title='Wind Speed'
                metric={`${results.current_weather.windspeed}m/s`}
                color='cyan'
              />
              <StatCard
                title='Wind Speed'
                metric={`${results.current_weather.winddirection}°`}
                color='violet'
              />
            </div>
          </div>
        </div>
        <hr className='md-5' />
        <div className='space-y-3'>
          {/* TempChart */}
          <TempChart results={results} />
          {/* RainChart */}
          {/* HumidityChart */}
        </div>
      </div>
    </div>
  );
}
