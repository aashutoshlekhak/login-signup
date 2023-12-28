// Dashboard.js
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserDashboard;
