import { NavLink, Outlet } from "react-router";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/stats", label: "Stats" },
];

const getNavClass = (isActive: boolean) =>
  `nav-link p-2 ${isActive ? "active bg-dark" : "text-dark"}`;

const getNavStyle = (isActive: boolean) => ({
  color: isActive ? "white" : "white",
});

const Layout = () => {
  return (
    <>
      <nav className="d-flex align-items-center w-100 px-3">
        <a className="navbar-brand m-0">BrainrotPedia</a>
        <ul className="nav nav-underline ms-auto">
          {navItems.map(({ to, label, end }, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => getNavClass(isActive)}
                style={({ isActive }) => getNavStyle(isActive)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
