
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addHeroToTeamAction } from '../../redux/heroReducer'
import PorwerStats from "./PorwerStats";
import "./hero.css";

const Hero = ({ hero }) => {
   const dispatch = useDispatch()

  return (
    <>
      <div className="col-xl-4 col-md-6 mb-5 col-sm-10 ">
        <div className="flip-card ">
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
              <PorwerStats hero={hero} />
              <div
                className="btn-group p-2"
                role="group"
                aria-label="Basic example"
              >
                <Link to={{pathname:'/HeroInfo', state:hero.id}} className="btn btn-secondary mr-2">
                  info
                </Link>
                <button type="button" onClick={()=>dispatch(addHeroToTeamAction(hero.id))} className="btn btn-secondary">
                  add to team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;

{
  /* <div className="card" style={{ width: "18rem" }}>
        <img src={hero.image.url} className="card-img-top" alt="..." />
        {/* <div className="card-body">
          <h5 className="card-title">{hero.name}</h5>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >peso</div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{"width": "25%"}}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{"width": "50%"}}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{"width": "75%"}}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >peso</div>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{"width": "100%"}}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div> */
}
//       <a href="#" className="btn btn-primary">
//         Go somewhere
//       </a>
//     </div>

// </> */}
