import classNames from "classnames";
import _ from "lodash";
import antd from "antd";
import Border from "../border";

function Button(props: any) {
  const className = classNames(
    "hx-button",
    { [`hx-button-${props.type}`]: props.type },
    props.className
  );
  const btnProps = _.omit(props, ["type", "style"]);
  return (
    <div className={className}>
      <Border corner={props.corner || 14} type={props.type}>
        <antd.Button
          {...btnProps}
          style={{ flexGrow: 1, border: 0, borderRadius: 0 }}
        >
          {props.children}
        </antd.Button>
      </Border>
    </div>
  );
}

export default Button;
