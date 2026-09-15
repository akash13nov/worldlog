import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityLIst from "./components/CityLIst";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const Base_URL = "/api";

const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityLIst cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityLIst cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
