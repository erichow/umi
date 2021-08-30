import React from "react";
import antd from "antd";
import classNames from "classnames";
import Border from "../border";
import "./index.scss";

function DatePicker(props: any) {
  const className = classNames(
    "hx-picker",
    { [`hx-picker-${props.type}`]: props.type },
    props.className
  );

  return (
    <div className={className}>
      <Border corner={props.corner}>
        <antd.DatePicker
          {...props}
          bordered={false}
          allowClear={false}
          inputReadOnly={true}
          style={{ width: "180px" }}
        />
      </Border>
    </div>
  );
}

export default DatePicker;
