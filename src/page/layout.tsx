import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/stats", label: "Stats" },
];

const Layout = () => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if(!query.trim())return
    navigate(`/?search=${query}`)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">BrainrotPedia</span>

          <div className="collapse navbar-collapse">

            {/* Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map(({ to, label, end }, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `nav-link ${
                        isActive ? "active fw-bold text-primary" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Search */}
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
