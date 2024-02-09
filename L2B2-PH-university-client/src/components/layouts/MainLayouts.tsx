import { Layout, Menu, MenuProps } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { createElement } from 'react';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Dashboard',
  },
  {
    key: '2',
    label: 'Profile',
  },
  {
    key: '3',
    label: 'User Management',
    children: [
      {
        key: '21',
        label: 'Create Admin',
      },
    ],
  },
  {
    key: '4',
    label: 'Admin Management',
  },
];

const logoStyle = {
  color: 'white',
  display: 'flex',
  height: '4rem',
  justifyContent: 'center',
  alignItems: 'center',
};

const MainLayouts = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={logoStyle}>
          <h1>MY University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayouts;
