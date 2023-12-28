import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      fetch("https://657983ff1acd268f9af93ea2.mockapi.io/api/proshoreBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div id="sign-up">
        <h2>Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
