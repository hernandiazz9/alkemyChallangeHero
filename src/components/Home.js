import { useEffect } from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { ObtenerHeroAction } from "../redux/heroReducer";
import Hero from "./hero";
import Team from "./team";
import Login from "./Login";

const Home = ({ history }) => {
  const user = useSelector((store) => store.login.user);
  const cargando = useSelector((store) => store.login.loading);
  const usuario = useSelector((store) => store.login.activo);
  const { heroes } = useSelector((store) => store.hero);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!usuario) {
      return history.push("/login");
    } else dispatch(ObtenerHeroAction());
  }, [usuario]);

  return (
    <>
    <Login />

      
      <Team />
      <div className="container">
        <div className="row">
            {heroes.map((hero) => (
              <Hero key={hero.id} hero={hero} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
