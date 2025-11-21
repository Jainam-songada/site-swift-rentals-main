const Navbar = () => {
  return (
    <header className="w-full border-b bg-background/50 backdrop-blur-sm fixed top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="text-lg font-bold text-primary">HeavyMove</a>
        <nav className="flex items-center gap-3 navbar">
          <a href="#home" className="relative px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5">
            <span>Home</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#about" className="relative px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5">
            <span>About</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#services" className="relative px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5">
            <span>Services</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#booking" className="relative px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5">
            <span>Booking</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#contact" className="relative px-3 py-2 rounded-md text-sm nav-link group transition-transform duration-200 hover:-translate-y-0.5">
            <span>Contact</span>
            <span className="nav-underline absolute left-0 bottom-0 h-[2px] bg-primary w-0 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
