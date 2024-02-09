const adminPaths2 = [
  {
    name: 'Dashboard',
    element: '<AdminDashboard />',
    path: 'dashboard',
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: '<CreateAdmin />',
      },
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: '<CreateAdmin />',
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: '<CreateFaculty />',
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: '<CreateStudent />',
      },
    ],
  },
];

const adminPaths = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children && item.children.length) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

console.log(adminPaths);
