import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addHeroToTeamAction, deleteHeroAction } from "../../redux/heroReducer";
import PorwerStats from "./PorwerStats";
import "./hero.css";
import Error from "../Error";

const Hero = ({ hero, addToTeam }) => {
  const dispatch = useDispatch();
  const { teamError, team, heroes } = useSelector((store) => store.hero);
  const [heroInYourTeam, setHeroInYourTeam] = useState(false)

  useEffect(() => {
    if(team.includes(hero))setHeroInYourTeam(true)
  }, [team, heroes])

  return (
      <div className={heroInYourTeam&&addToTeam?"flip-card in-your-team " : "flip-card "}>
        <div className="flip-card-inner">
          <div className="flip-card-front ">
            <span className="hero-name">{hero.name}</span>
            <img
              src={hero.image.url}
              alt="Avatar"
              style={{ width: "18rem", height: "25rem" }}
            />
          </div>
          <div className="flip-card-back">
            <h3>{hero.name}</h3>
            <p> {hero.biography.alignment} </p>
            <PorwerStats powerStats={hero.powerstats} />
            {teamError.length > 0 && addToTeam && <Error error={teamError} />}
            <div
              className="btn-group p-2"
              role="group"
              aria-label="Basic example"
            >
              <Link
                to={{ pathname: "/HeroInfo", state: hero.id }}
                className="btn btn-primary mr-2"
              >
                info
              </Link>
              {addToTeam ? (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => dispatch(addHeroToTeamAction(hero.id))}
                >
                  add to team
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteHeroAction(hero.id))}
                >
                  delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
