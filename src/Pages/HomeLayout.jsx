import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../Components";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-elment py-20 pl-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
