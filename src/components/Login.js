import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => (

  <div>
    <h1 className='text-white'>Login with yout account</h1>
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
        } else if (values.password.length < 8) {
          errors.password = "Password must have 8 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-group">
          <span className="text-white">Email:</span>
          <Field type="email" name="email" className="form-control col-sm-5" />
          <ErrorMessage name="email" component="div" className="text-danger" />
          <span className="text-white">Password:</span>
          <Field
            type="password"
            name="password"
            className="form-control col-sm-5"
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
);

export default Login;
