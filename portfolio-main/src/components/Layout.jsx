import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ArcadeTicker from './ArcadeTicker';
import ScrollManager from './ScrollManager';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main id="main-content" className="site-main" tabIndex={-1}>
        <Outlet />
        <ArcadeTicker />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
