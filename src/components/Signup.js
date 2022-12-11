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
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} />

            <br />
            <br />

            <label htmlFor="password">Password</label>
            <input name="password" onChange={handleChange} />

            <br />
            <br />

            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input name="passwordConfirm" onChange={handleChange} />

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
