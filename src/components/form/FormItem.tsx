import _ from "lodash";
import * as React from "react";
import classNames from "classnames";
import { Form, Space } from "antd";
import Tooltip from "../tooltip";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "./index.scss";

function str2tooltip(title: String, props: any | undefined) {
  return <Tooltip visible title={title} {...props}></Tooltip>;
}

function tran(props: any) {
  const { rules, required } = props;
  const mergeRules = _.merge(
    [],
    rules,
    required && { required: true, message: "必填" }
  );
  if (!mergeRules) return;
  return mergeRules.map((rule: any) => {
    return {
      ...rule,
      message: str2tooltip(rule.message),
    };
  });
}

function Item(props: any) {
  const className = classNames(
    "hx-form-item",
    { [`hx-form-item-${props.type}`]: props.type },
    props.className
  );
  let cloneChildren = React.Children.map(props.children, (child) =>
    React.cloneElement(child)
  );

  // 有提示图标
  const hasTooltip = (
    <Form.Item noStyle>
      <Form.Item
        {...props}
        className={className}
        rules={tran(props)}
        style={{ marginRight: 0 }}
      >
        {props.children}
      </Form.Item>
      <Tooltip placement="right" title={props.desc} color="red">
        <ExclamationCircleOutlined
          style={{
            cursor: "pointer",
            color: "orange",
            marginRight: "16px",
            marginLeft: "5px",
          }}
        />
      </Tooltip>
    </Form.Item>
  );

  // 无提示图标
  const noTooltip = (
    <Form.Item {...props} rules={tran(props)} className={className}>
      {props.children}
    </Form.Item>
  );

  return <>{props.desc ? hasTooltip : noTooltip}</>;
}

export default Item;
