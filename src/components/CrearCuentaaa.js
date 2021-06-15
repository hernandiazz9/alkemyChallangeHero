import { useState, useEffect } from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { crearCuentaAction } from "../redux/loginReducer";

const CrearCuenta = (props) => {
  //leer usuario 
  const usuario = useSelector((store) => store.login.activo);
  //  displach para llamar a la acción
  const dispatch = useDispatch();

  //crear state para loguearse
  const [loguearse, setLoguearse] = useState({
    email: "",
    password: "",
    nombre: "",
  });
  const { email, password, nombre } = loguearse;

  useEffect(() => {
    if (usuario) {
      return props.history.push("/");
    }
  }, [usuario]);

  const crearCuenta = () => {
    dispatch(crearCuentaAction(email, password, nombre));
    props.history.push("/");
    setLoguearse({
      email: "",
      password: "",
      nombre: "",
    });
  };
  const onChange = (e) => {
    setLoguearse({
      ...loguearse,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form
        className="p-4"
        style={{
          backgroundColor: "#00000024",
        }}
      >
        <h2>Create an Account</h2>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control col-sm-5"
            placeholder="Enter Name"
            id="inputName"
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control col-sm-5"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="inputPass">Password</label>
          <input
            type="password"
            className="form-control col-sm-5"
            id="inputPass"
            placeholder="Password"
            aria-describedby="passHelp"
            name="password"
            value={password}
            onChange={onChange}
          />
          <small id="passHelp" className="form-text text-muted">
            Password must have 6 digit
          </small>
        </div>

        <button type="button" className="btn btn-primary" onClick={crearCuenta}>
          LogIn
        </button>
      </form>
      <div></div>
    </>
  );
};

export default CrearCuenta;
