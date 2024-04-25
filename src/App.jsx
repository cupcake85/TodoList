import { useState } from "react";
import InputList from "./Input.jsx";
import AddList from "./List.jsx";
import { Card, Image } from "antd";

function TodoList() {
  const [list, setList] = useState([]);
  const [inputList, setInputList] = useState("");
  const [edit, setEdit] = useState("");

  const onSubmit = () => {
    if (edit != null) {
      const newList = list.map((e, i) => {
        if (i === edit) return inputList;
        return e;
      });
      setList(newList);
      setInputList("");
      setEdit(undefined);
    } else {
      if (inputList.length) setList([...list, inputList]);
      setInputList("");
    }
  };

  const onEdit = (index) => {
    const value = list.find((_, i) => i === index);
    if (value) setInputList(value);
    setEdit(index);
  };

  const Delete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        alignContent: "space-between",
      }}
    >
      <div>
        เทอเห็นนั่นมั้ย
        <Image
          width={70}
          src="https://th.bing.com/th/id/OIP.HS3Po0d4LxecX2PD7BTxFwHaKl?w=840&h=1201&rs=1&pid=ImgDetMain"
          style={{ borderRadius: "8px", marginTop: "100px" }}
        />
      </div>

      <Card style={{ height: "500px" }}>
        <InputList
          onSubmit={onSubmit}
          inputList={inputList}
          setInputList={setInputList}
        />
        <AddList onEdit={onEdit} Delete={Delete} list={list} />
      </Card>
    </div>
  );
}

export default TodoList;
