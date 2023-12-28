import { useState, useEffect } from "react";

interface UserData {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://657983ff1acd268f9af93ea2.mockapi.io/api/proshoreBook")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>User List</h3>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
