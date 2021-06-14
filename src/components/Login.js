import { useState, useEffect } from "react";
// hooks react redux
import { useDispatch, useSelector } from "react-redux";

// importamos la acción
import { iniciarSesionAction } from "../redux/loginReducer";

const Login = (props) => {
  //obtener usuario 
  const usuario = useSelector((store) => store.login.activo);
  // declaramos displach para llamar a la acción o acciones
  const dispatch = useDispatch();
  //crear state para loguearse
  const [loguear, setLoguear] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loguear;

  useEffect(() => {
    if (usuario) {
      return props.history.push("/");
    }
  }, [usuario]);

  const onClickLogin = () => {
    if (loguear.email === "" || loguear.password.length < 6)
      return console.log("NO CUMPLE");
    dispatch(iniciarSesionAction(email, password));
    setLoguear({
      email: "",
      password: "",
    });
    return props.history.push("/");
  };

  const onChange = (e) => {
    console.log(e.target.value, "nono");
    setLoguear({
      ...loguear,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="p-4"
      style={{
        backgroundColor: "#00000024",
      }}
    >
      <h2>Login with your Account</h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control col-sm-5"
          id="exampleInputEmail1"
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
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control col-sm-5"
          id="exampleInputPassword1"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>

      <button type="button" className="btn btn-primary" onClick={onClickLogin}>
        LogIn
      </button>
    </form>
  );
};

export default Login;
