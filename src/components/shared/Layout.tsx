import { Outlet } from 'react-router-dom';
import Footer from '../landing/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
