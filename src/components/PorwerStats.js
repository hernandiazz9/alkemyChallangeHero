const PorwerStats = ({ hero }) => {
  const namePowerStat = Object.keys(hero.powerstats);
  return (
    <>
      {namePowerStat.map((name) => (
        <div className="progress" key={name}>
          <PorwerStats hero={hero} />
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: 50, border: "1px solid" }}
          >
            {name}
          </div>
        </div>
      ))}
    </>
  );
};

export default PorwerStats;
