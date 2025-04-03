import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting facts
        <br />
        We're Proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-discription">Country Name :</span>
                  {countryName}
                </p>
                <p>
                  <span className="card-discription">Capital :</span>
                  {capital}
                </p>
                <p>
                  <span className="card-discription">Population :</span>
                  {population}
                </p>
                <p>
                  <span className="card-discription">Interesting Facts :</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
