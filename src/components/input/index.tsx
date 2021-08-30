import antd from "antd";
import Border from "@/components/border";
import classNames from "classnames";
import "./index.scss";

const className = classNames("hx-input");
function Input(props: any) {
  return (
    <div className={className}>
      <Border corner={props.corner}>
        <antd.Input {...props} style={{ border: 0 }} />
      </Border>
    </div>
  );
}

Input.Group = antd.Input.Group;
Input.Search = antd.Input.Search;
Input.TextArea = antd.Input.TextArea;
Input.Password = antd.Input.Password;

export default Input;
