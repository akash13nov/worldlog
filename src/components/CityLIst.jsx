import Spinner from "./Spinner";
import styles from "./CityLIst.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

const CityLIst = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityLIst;
