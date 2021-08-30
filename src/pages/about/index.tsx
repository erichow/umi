import React from "react";
import moment from "moment";
import { SwapRightOutlined } from "@ant-design/icons";
import { Form, Button, DatePicker, Input, Select } from "@/components";
const { RangePicker } = DatePicker;
import styles from "./index.scss";

export default function IndexPage() {
  return (
    <div>
      <Form
        onFinish={console.log}
        layout="inline"
        initialValues={{
          aa: [moment().subtract(3, "months"), moment()],
          bb: moment(),
          cc: "test",
        }}
      >
        <Form.Item name="aa" label="日期范围" required desc="日期范围三个月">
          <RangePicker />
        </Form.Item>
        <Form.Item name="bb" label="日期" required>
          <DatePicker />
        </Form.Item>
        <Form.Item name="cc" label="登录号" desc="登录号是给开发人员用的">
          <Input />
        </Form.Item>
        <Form.Item name="dd" label="机号" desc="机号是给业务人员用的">
          <Input />
        </Form.Item>
        <Form.Item name="ee" label="下拉框" required>
          <Select>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" ghost htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
