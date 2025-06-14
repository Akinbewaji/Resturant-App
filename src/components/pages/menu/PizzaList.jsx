import PizzaCard from "./PizzaCard";
import { useEffect, useState } from "react";

const PizzaList = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from the API
  const fetchUsers = async () => {
    const apiUrl = "https://api.github.com/users";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
    },
  };

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <PizzaCard
          pizzaImg={user.avatar_url}
          pizzaTitle={user.login}
          link={user.html_url}
          pizzaPrice={user.id}
        />
      ))}
    </div>
  );
};

export default PizzaList;
