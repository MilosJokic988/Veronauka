import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <Header />
      <main className="container-fluid mt-4 mb-5 flex-fill">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
