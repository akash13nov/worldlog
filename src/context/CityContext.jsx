import { createContext, useContext, useEffect, useState } from "react";

const Base_URL = "/api";
const CityContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCities = async () => {
      try {
        setIsLoading(true);

        const data = await fetch(`${Base_URL}/cities`);
        const json = await data.json();
        //console.log(json);

        setCities(json);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    };
    getCities();
  }, []);

  return (
    <CityContext.Provider value={{ cities, isLoading }}>
      {children}
    </CityContext.Provider>
  );
}

function useCities() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error("CityContext was used outside the CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
