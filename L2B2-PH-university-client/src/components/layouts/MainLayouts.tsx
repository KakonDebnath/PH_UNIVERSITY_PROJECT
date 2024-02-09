import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { sidebarMenuItems } from '../../routes/admin.routes';
const { Header, Content, Footer, Sider } = Layout;

// const manualNavlink = [
//     {
//       key: 'dashboard',
//       label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//     },
//     {
//       key: 'user management',
//       label: 'User Management',
//       children: [
//         {
//           key: 'create admin',
//           label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//         },
//         {
//           key: 'create faculty',
//           label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//         },
//         {
//           key: 'create student',
//           label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//         },
//       ],
//     },
//   ];

// const items: MenuProps['items'] = sidebarMenuItem

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
          items={sidebarMenuItems}
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
