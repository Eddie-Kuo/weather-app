import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
  query myQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index_clear_sky"
    $latitude: String
    $longitude: String
    $temperature_unit: String
    $timezone: String
    $windspeed_unit: String
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      temperature_unit: $temperature_unit
      timezone: $timezone
      windspeed_unit: $windspeed_unit
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        precipitation
        precipitation_probability
        relativehumidity_2m
        snow_depth
        temperature_2m
        time
        uv_index_clear_sky
        windspeed_10m
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation
        precipitation_probability
        relativehumidity_2m
        snow_depth
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windspeed_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
