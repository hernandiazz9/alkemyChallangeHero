import { useDispatch, useSelector } from "react-redux";
import PorwerStats from "../PorwerStats";
import "./hero.css";

const Hero = ({ hero }) => {

  return (
    <>
      {/* <div className="card"style={{ width: "18rem",'height':'25rem' }}> */}
      <div className="flip-card ">
        <div className="flip-card-inner">
          <div className="flip-card-front ">
            <img
              src={hero.image.url}
              alt="Avatar"
              style={{ width: "18rem", height: "25rem" }}
            />
          </div>
          <div className="flip-card-back">

            {/* <PorwerStats hero={hero}/> */}

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
