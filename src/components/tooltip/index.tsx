import antd from "antd";
import _ from "lodash";

function Tooltip(props: any) {
  const color: string = props.color || "red";
  const placement: string = props.placement || "right";

  return (
    <antd.Tooltip {...props} color={color} placement={placement}>
      {props.children}
    </antd.Tooltip>
  );
}

export default Tooltip;
