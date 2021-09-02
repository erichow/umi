import React from "react";
import Border from "@/components/border";
import classNames from "classnames";
import { DatePicker } from "antd";
import {
  SwapRightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

function RangePicker(props: any) {
  const startRef = React.useRef(null);
  const endRef = React.useRef(null);
  const className = classNames("hx-picker hx-picker-range", props.className);

  function handleStart(mdate: Object, sdate: String): void {
    props.onChange([mdate, endRef.current.props.value]);
  }

  function handleEnd(mdate: Object, sdate: String): void {
    props.onChange([startRef.current.props.value, mdate]);
  }

  return (
    <div className={className}>
      <Border corner={props.corner}>
        <DatePicker
          ref={startRef}
          value={props.value[0]}
          onChange={handleStart}
          className={className}
          bordered={false}
          inputReadOnly={true}
          suffixIcon={<SwapRightOutlined />}
          allowClear={false}
          showToday={false}
        />
        <DatePicker
          ref={endRef}
          value={props.value[1]}
          onChange={handleEnd}
          className={className}
          bordered={false}
          inputReadOnly={true}
          allowClear={false}
          showToday={false}
          style={{ marginLeft: "-11px" }}
        />
      </Border>
    </div>
  );
}

export default RangePicker;
