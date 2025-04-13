import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/Layout/CountryCard";
// import axios from "axios";
export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  // const link = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(link)
  //     .then((res) => {
  //       setCountries(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // });

  if (isPending)
    return (
      <center>
        <h1>Loading</h1>
      </center>
    );

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
        {/* <CountryCard /> */}
      </ul>
    </section>
  );
};
