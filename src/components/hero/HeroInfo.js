import { useEffect } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroInfo = (props) => {
  const usuarioActivo = useSelector((store) => store.login.activo);
  const { heroes } = useSelector((store) => store.hero);

  useEffect(() => {
    if (!usuarioActivo) return props.history.push("/login");
    if (heroes.length === 0) return props.history.push("/");
  }, [usuarioActivo, heroes]);

  const heroSelect = heroes.filter((hero) => hero.id === props.location.state);

  return heroes.length > 0 ? (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={heroSelect[0].image.url} alt="hero-imagen" />
          </div>
          <div className="col text-white">
            <h2>{heroSelect[0].name}</h2>
            <p >
              <span className='font-weight-bold'>Aliases: </span>
              {heroSelect[0].biography.aliases.map((alias) => (
                <span key={alias}> {alias}, </span>
              ))}
            </p>
            <p><span  className='font-weight-bold'>Work base:</span> {heroSelect[0].work.base}</p>
            <p >
              <span className='font-weight-bold'>Appearance:</span> {heroSelect[0].appearance.gender},{" "}
              {heroSelect[0].appearance.race}
            </p>
          </div>
        </div>
      </div>
      <div className='pt-4'>
      <Link  to='/' >
          Go Back
      </Link>
      </div>
    </>
  ) : (
    <span>cargando...</span>
  );
};

export default HeroInfo;
