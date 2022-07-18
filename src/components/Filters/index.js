import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
// import { FilterPriority, searchTodo, StatusFilter } from '../../redux/action';
import { useDispatch } from "react-redux";
import { searchTodo, StatusFilter, FilterPriority } from "./filterSlice";
const { Search } = Input;
export default function Filters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState([]);
  // const searchText = useSelector(state => state.filters.searchText);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setSearch(e.target.value);
    //dispatch action search
    dispatch(searchTodo(e.target.value));
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
    dispatch(StatusFilter(e.target.value));
  };
  const handlePriority = (value) => {
    setFilterPriority(value);
    dispatch(FilterPriority(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={search}
          onChange={handleSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={filterPriority}
          onChange={handlePriority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
