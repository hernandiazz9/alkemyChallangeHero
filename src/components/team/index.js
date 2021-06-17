import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Hero from "../hero";
import PorwerStats from "../hero/PorwerStats";
import { PowerstasTeam } from '../../redux/heroReducer'

const Team = () => {
  const dispatch = useDispatch();
  const { team, powerstats } = useSelector((state) => state.hero);

  useEffect(() => {
    dispatch( PowerstasTeam() );
  }, [team]);

  return (
    <div className="border border-green mt-5 pt-4">
      {team.length === 0 ? (
        <p className="py-4 text-center text-white">
          You still haven`t a team, start searching and adding a HERO
        </p>
      ) : (
        <>
          <div className="container  ">
            <div className="row  ">
              <h2 className=" col-md-5 col-sm-12 text-white display-2 mb-3 ml-3">
                That is Your Team
              </h2>
              <div className="col-md-5 col-sm-12 text-white">
                <h3>Team PowerStats</h3>
                <div className="mb-4">
                  <PorwerStats powerStats={powerstats} />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row  ">
              {team.map((hero) => (
                <div
                  key={hero.id}
                  className="pl-5 mb-5 col-xl-4 col-md-6  col-sm-12 "
                >
                  <Hero hero={hero} addTeam={false} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;
