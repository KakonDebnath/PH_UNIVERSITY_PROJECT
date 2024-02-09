import { Layout, Menu } from 'antd';
import { sidebarItemGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';

const { Sider } = Layout;
const logoStyle = {
    color: 'white',
    display: 'flex',
    height: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
  };

const Sidebar = () => {
  return (
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
        items={sidebarItemGenerator(adminPaths, 'admin')}
      />
    </Sider>
  );
};

export default Sidebar;
