import antd from "antd";
import classNames from "classnames";

function Col(props) {
  const className = classNames(props.className);
  return (
    <antd.Col {...props} className={className}>
      {props.children}
    </antd.Col>
  );
}

export default Col;
