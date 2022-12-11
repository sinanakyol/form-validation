import { Formik } from "formik";
import validations from "./validations";

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validations} //******************* */
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} onBlur={handleBlur} />

            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}

            <br />
            <br />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}

            <br />
            <br />

            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              name="passwordConfirm"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.passwordConfirm && touched.passwordConfirm && (
              <div className="error">{errors.passwordConfirm}</div>
            )}

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
