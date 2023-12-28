type Props = {
  data: string[];
  loading: boolean;
}

const WeatherInfo = ({ data, loading} : Props) => {
  console.log(data)
  return <div>weather info</div>;
};

export default WeatherInfo;
