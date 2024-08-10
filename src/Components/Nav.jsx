import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants/index";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Disable vertical scrolling and touch moves
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
    } else {
      // Re-enable vertical scrolling and touch moves
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:z-50 ${
            isMenuOpen
              ? "max-lg:flex max-lg:flex-col max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-white"
              : "max-lg:hidden lg:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className="my-4 lg:my-0">
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                onClick={closeMenu} // Close menu when a link is clicked
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={toggleSideMenu} className="lg:hidden">
          <img src={hamburger} width={25} height={25} alt="Menu" />
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSideMenu}
        ></div>
      )}
    </header>
  );
};

export default Nav;
