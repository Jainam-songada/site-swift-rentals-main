import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-background/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="text-lg font-bold text-primary">Swift Rentals</a>
        <nav className="flex items-center gap-3 navbar">
          <NavLink to="/" className="px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5" activeClassName="text-primary font-semibold">
            <span>Home</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </NavLink>

          <NavLink to="/about" className="px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5" activeClassName="text-primary font-semibold">
            <span>About</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </NavLink>

          <NavLink to="/services" className="px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5" activeClassName="text-primary font-semibold">
            <span>Services</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </NavLink>

          <NavLink to="/booking" className="px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5" activeClassName="text-primary font-semibold">
            <span>Booking</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </NavLink>

          <NavLink to="/contact" className="px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5" activeClassName="text-primary font-semibold">
            <span>Contact</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
