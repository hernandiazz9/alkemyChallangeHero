import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { iniciarSesionAction } from "../redux/loginReducer";
import Error from "./Error";

const Login = (props) => {
  const usuarioActivo = useSelector((store) => store.login.activo);
  const { error } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usuarioActivo) return props.history.push("/");
  }, [usuarioActivo]);

  return !usuarioActivo ? (
    <div>
      <h1 className="text-white">Login with yout account</h1>
      { error ? <Error error={ error } /> : null}
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 5) {
            errors.password = "Password must have 5 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          dispatch(iniciarSesionAction(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-group">
            <span className="text-white">Email:</span>
            <Field
              type="email"
              name="email"
              className="form-control col-sm-5"
              placeholder = 'your email'
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
            <span className="text-white">Password:</span>
            <Field
              type="password"
              name="password"
              className="form-control col-sm-5"
              placeholder = 'your password'
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default Login;
