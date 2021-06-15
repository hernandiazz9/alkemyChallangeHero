import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { cerrarSesionAction } from "../redux/loginReducer";

const Navbar = () => {
  const dispatch = useDispatch();
  // leer state
  const logueado = useSelector((store) => store.login.activo);
  const user = useSelector((store) => store.login.user);

  return (
    <>
      <div className="text-center p-4">
        <Link className="" to="/">
          SuperHero
        </Link>
      </div>
      <div className=" navbar navbar-dark bg-dark d-flex justify-content-around">
        <div className=''>
          <div className="">
            {logueado && (
              <NavLink className="btn btn-dark mr-2" to="/" exact>
                Home
              </NavLink>
            )}
            {logueado ? (
              <NavLink className="btn btn-dark mr-2" to="/" exact>
                {user && user.name}
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
                onClick={() => dispatch(cerrarSesionAction())}
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
