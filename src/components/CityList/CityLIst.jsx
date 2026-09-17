import Spinner from "../Spinner/Spinner";
import styles from "./CityLIst.module.css";
import CityItem from "../CityItem/CityItem";
import Message from "../Message/Message";
import { useCities } from "../../context/CityContext";

const CityLIst = () => {
  const { cities, isLoading } = useCities();

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
