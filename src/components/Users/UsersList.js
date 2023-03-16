import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

function UsersList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
