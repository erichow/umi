import antd from "antd";
import classNames from "classnames";
import "./index.scss";
import Border from "../border";

function Select(props) {
  const className = classNames("hx-select");
  return (
    <div className={className}>
      <Border corner={props.corner}>
        <antd.Select {...props} style={{ border: 0, background: "none" }}>
          {props.children}
        </antd.Select>
      </Border>
    </div>
  );
}

Select.Option = antd.Select.Option;
Select.OptGroup = antd.Select.OptGroup;

export default Select;
