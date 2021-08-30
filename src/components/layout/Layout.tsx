import { ReactNode } from "react";
import antd from "antd";

type LayoutProps = React.ComponentProps<typeof antd.Layout>;
type HeaderProps = React.ComponentProps<typeof antd.Layout.Header>;

function Layout(props: LayoutProps): ReactNode {
  return (
    <antd.Layout {...props} className={`hx-layout ${props.className}`}>
      {props.children}
    </antd.Layout>
  );
}

function Header(props: HeaderProps) {
  return (
    <antd.Layout.Header
      {...props}
      className={`hx-layout-header ${props.className}`}
    >
      {props.children}
    </antd.Layout.Header>
  );
}

function Footer(props: any) {
  return (
    <antd.Layout.Footer
      {...props}
      className={`hx-layout-footer ${props.className}`}
    >
      {props.children}
    </antd.Layout.Footer>
  );
}

function Content(props: any) {
  return (
    <antd.Layout.Content
      {...props}
      className={`hx-layout-content ${props.className}`}
    >
      {props.children}
    </antd.Layout.Content>
  );
}

export { Header, Footer, Content };

export default Layout;
