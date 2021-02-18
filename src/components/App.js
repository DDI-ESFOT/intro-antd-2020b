import { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import TodoList from "./TodoList";
import Loading from "./Loading";
import "../styles/App.css";
import { Button, Col, Row, Space } from "antd";

function App() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [userTodoList, setUserTodoList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const userInfo = await response.json();

      console.log("userInfo", userInfo);
      setUserData(userInfo);
    };

    getData();

    const getTodoList = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos`
      );
      const userList = await response.json();

      console.log("userList", userList);
      setUserTodoList(userList);
    };

    getTodoList();
  }, [userId]);

  const handlePrevUser = () => {
    if (userId > 1) {
      setUserId((prevState) => prevState - 1);
    }
  };

  const handleNextUser = () => {
    if (userId < 10) {
      setUserId((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <Row justify="center" style={{ marginTop: 10 }}>
            <Col span={8}>
              <Button
                type="primary"
                onClick={handlePrevUser}
                disabled={userId <= 1}
              >
                Anterior
              </Button>
            </Col>

            <Col span={8} style={{ textAlign: "end" }}>
              <Button
                type="primary"
                onClick={handleNextUser}
                disabled={userId >= 10}
              >
                Siguiente
              </Button>
            </Col>
          </Row>
          {userData ? <UserInfo user={userData} /> : <Loading />}

          <TodoList todos={userTodoList} />
        </Col>
      </Row>
    </>
  );
}

export default App;
