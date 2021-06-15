const PorwerStats = ({ hero }) => {
  const namePowerStat = Object.keys(hero.powerstats);
  const valuePowerStat = Object.values(hero.powerstats);
  return (
    <>
      {namePowerStat.map((name, i) => (
        <div className="progress" style={{ height: "30px" }} key={name}>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{
              width: `${valuePowerStat[i]}%`,
              color: "black",
              margin: "2px 1px ",
              border: "1px solid",
            }}
          >
            {` ${name}: ${valuePowerStat[i]}%`}
          </div>
        </div>
      ))}
    </>
  );
};

export default PorwerStats;
