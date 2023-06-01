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
  console.log('hello');

  return <div>Welcome to the Weather Page</div>;
}
