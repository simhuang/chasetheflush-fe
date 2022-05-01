import { Layout, Menu } from "antd";

import PropTypes from "prop-types";

import HeaderBar from "src/containers/Headerbar";

import { PRIMARY_WHITE, PRIMARY_GREY } from "src/constants/style";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FunctionComponent<MainLayout> = ({
  leftSiderContent,
  centerContent,
  rightSiderContent,
}) => {
  return (
    <Layout
      hasSider
      style={{
        background: PRIMARY_GREY,
      }}
    >
      <Header
        style={{
          top: 0,
          position: "fixed",
          zIndex: 1,
          width: "100%",
          height: "100px",
          marginBottom: "24px",
          background: PRIMARY_WHITE,
        }}
      >
        <HeaderBar />
      </Header>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1522px",
            background: PRIMARY_GREY,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: PRIMARY_WHITE,
              height: "700px",
              borderRadius: "8px",
              marginTop: "124px",
              marginLeft: "24px",
              marginRight: "24px",
              width: "318px",
              maxWidth: "318px",
            }}
          >
            {leftSiderContent}
          </div>
          <Content
            style={{
              marginTop: "124px",
              marginBottom: "74px",
              background: PRIMARY_GREY,
              maxWidth: "690px",
              width: "690px",
            }}
          >
            {centerContent}
          </Content>
          <div
            style={{
              width: "318px",
              maxWidth: "318px",
              borderRadius: "8px",
              marginTop: "124px",
              background: PRIMARY_WHITE,
              minHeight: "500px",
              height: "500px",
              marginLeft: "24px",
              marginRight: "24px",
            }}
          >
            {rightSiderContent}
          </div>
        </div>
      </div>
      <Footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: PRIMARY_WHITE,
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "1400px",
          }}
        >
          footer
        </div>
      </Footer>
    </Layout>
  );
};

MainLayout.propTypes = {
  leftSiderContent: PropTypes.element,
  centerContent: PropTypes.element,
  rightSiderContent: PropTypes.element,
};

type MainLayout = {
  leftSiderContent: any;
  centerContent: any;
  rightSiderContent: any;
};

export default MainLayout;
