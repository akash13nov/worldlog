import SideBar from "../../components/SideBar/SideBar";
import Map from "../../components/Map/Map";
import styles from "./AppLayout.module.css";
import User from "../../components/User/User";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
