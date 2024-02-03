import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

function LayoutComponent() {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}