import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleStatus } from '../../redux/action';
import { toggleTodo } from "../TodoList/todoSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, complete, id }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(complete);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
