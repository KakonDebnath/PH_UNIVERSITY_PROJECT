import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';
import AcademicDepartment from '../pages/admin/academicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/academicManagement/AcademicFaculty';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';
import CreateAcademicDepartment from '../pages/admin/academicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/academicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/academicManagement/CreateAcademicSemester';

export const adminPaths = [
  {
    name: 'Dashboard',
    element: <AdminDashboard />,
    path: 'dashboard',
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Create Academic Semester',
        path: 'create-academic-semesters',
        element: <CreateAcademicSemester />,
      },
      {
        name: 'Get Academic Semester',
        path: 'academic-semesters',
        element: <AcademicSemester />,
      },
      {
        name: 'Create Academic Faculty',
        path: 'create-academic-faculty',
        element: <CreateAcademicFaculty />,
      },
      {
        name: 'Get Academic Faculty',
        path: 'academic-faculty',
        element: <AcademicFaculty />,
      },
      {
        name: 'Create Academic Department',
        path: 'create-academic-department',
        element: <CreateAcademicDepartment />,
      },
      {
        name: 'Get Academic Department',
        path: 'academic-department',
        element: <AcademicDepartment />,
      },
    ],
  },
];

// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children && item.children.length) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

// manual path
// const adminRoutes = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-Admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
// ];
