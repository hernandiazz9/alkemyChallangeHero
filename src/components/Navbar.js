import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { cerrarSesionAction } from "../redux/loginReducer";
import { resetHeroAction } from "../redux/heroReducer";
const Navbar = () => {
  const dispatch = useDispatch();
  // leer state
  const logueado = useSelector((store) => store.login.activo);

  return (
    <>
      <div
        style={{
          fontFamily: "Dela Gothic One, cursive",
        }}
        className="text-center p-4"
      >
        <Link style={{ color: "#14cc60", textDecorationLine: "none" }} to="/">
          <h1 style={{fontSize:'6.5vw'}}>SUPER<span class="text-muted">HERO</span></h1>
        </Link>
      </div>
      <div className=" navbar navbar-dark bg-dark d-flex justify-content-around">
        <div className="">
          <div className="">
            {logueado ? (
              <NavLink className="btn btn-dark mr-2" to="/" exact>
                Home
              </NavLink>
            ) : (
              <div>
                <NavLink className="btn btn-dark mr-2" to="/login" exact>
                  Login
                </NavLink>
              </div>
            )}

            {logueado && (
              <button
                className="btn btn-dark"
                onClick={() => {
                  dispatch(cerrarSesionAction());
                  dispatch(resetHeroAction());
                }}
              >
                cerrar Sesión
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
