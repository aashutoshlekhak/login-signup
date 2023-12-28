// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UserDashboard from "./pages/userDashboard";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/" element={<p></p>} />
        <Route path="/dashboard" Component={Dashboard} />;
        <Route path="/userdashboard" Component={UserDashboard} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
