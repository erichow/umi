import React from "react";
import antd from "antd";
import _ from "lodash";
import classNames from "classnames";
import Border from "../border";
import "./index.scss";

function DatePicker(props: any) {
  const className = classNames(
    "hx-picker",
    { [`hx-picker-${props.type}`]: props.type },
    props.className
  );

  _.omit(props, ["corner"]);
  return (
    <div className={className}>
      <Border corner={props.corner}>
        <antd.DatePicker
          showToday={false}
          bordered={false}
          allowClear={false}
          inputReadOnly={true}
          {...props}
        />
      </Border>
    </div>
  );
}

export default DatePicker;
