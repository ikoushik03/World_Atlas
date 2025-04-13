import React from "react";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
      </div>
    </li>
  );
};
export default CountryCard;

// import React from "react";

// export default function CountryCard({ country, index }) {
//   return (
//     <div>
//       <li key={index}>{country.name.common}</li>
//     </div>
//   );
// }
