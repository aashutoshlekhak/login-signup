import { useFormik } from "formik";
import * as Yup from "yup";
import { setUsername } from "../store/slices/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Define Yup schema for Login
const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/,
      "Password must contain at least one special character"
    ),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login form submitted with values:", values);
      const username = values.email.split("@")[0];
      dispatch(setUsername(username));
      navigate("/userdashboard");
    },
  });

  return (
    <>
      <div id="login">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
