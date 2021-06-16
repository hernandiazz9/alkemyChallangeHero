import { useEffect } from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerUsuarioAction } from "../redux/loginReducer";
import Hero from "./hero";
import Team from "./team";

const Home = ({ history }) => {
  const usuarioActivo = useSelector((store) => store.login.activo);
  const { heroes } = useSelector((store) => store.hero);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!usuarioActivo) {
      return history.push("/login");
    }
  }, [usuarioActivo]);

  useEffect(() => {
    dispatch(obtenerUsuarioAction())
  }, [])
  return (
    <>
      <Team />
      <div className="container">
        <div className="row">
            {heroes&&heroes.map((hero) => (
              <Hero key={hero.id} hero={hero} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
