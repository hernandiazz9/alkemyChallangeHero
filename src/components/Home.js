import { useEffect } from "react";
import { Link } from "react-router-dom";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { ObtenerHeroAction } from '../redux/heroReducer'
import Hero from "./hero";

const Home = ({ history }) => {
  const user = useSelector((store) => store.login.user);
  const cargando = useSelector((store) => store.login.loading);
  const usuario = useSelector((store) => store.login.activo);
  const {heros} = useSelector((store) => store.hero);


  const dispatch = useDispatch();

  useEffect(() => {
    if (!usuario) {
      return history.push("/login");
    } else dispatch(ObtenerHeroAction())
  }, [usuario]);

  return (
    <div>
      Todavia no tienes un equipo, comienza buscando un hero
      {heros.map(hero=>(
        <Hero key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default Home;
