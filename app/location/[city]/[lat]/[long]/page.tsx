import fetchWeatherQuery from '@/graphQl/queries/fetchWeatherQueries';
import { getClient } from '@/apollo-client';

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

  console.log('data', data);

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div>
      {/* Information Panel */}

      <div>
        <div className='p-5'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Todays Overview</h2>
            <p className='text-sm text-gray-400'>
              Last Updated at:
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>

          <div>{/* callout card */}</div>
        </div>
      </div>
    </div>
  );
}
