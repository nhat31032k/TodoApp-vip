import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
// import { addTodoAction } from '../../redux/action';
import { v4 as uuidv4 } from 'uuid';
import { filterSelector } from '../../redux/selector';
import {addTodo} from "./todoSlice"
export default function TodoList()
{
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('medium');
  const [complete, setComplete] = useState(false);
  const todos = useSelector(filterSelector);
  // const searchText = useSelector(searchSelector);
  const dispatch = useDispatch();
  const handleAddTodo = () =>
  {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      complete: complete,
    }));
    setTodoName('');
    setPriority('Medium');
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* add action  */}
        {todos.map((item) => (
          <Todo key={item.id} id={item.id} complete={item.complete} name={item.name} prioriry={item.priority} />
        ))
        }

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={(value) => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
