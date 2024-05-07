import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("ss", isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Image
          src="/logo.png"
          alt="Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        {isMobile && (
          <button className="menu-button" onClick={toggleMobileMenu}>
            menu
          </button>
        )}

        <div className={`navlink ${isMobileMenuOpen ? "open" : "close"}`}>
          <Link className="navlink-item" href="/home">
            Home
          </Link>
          <Link className="navlink-item" href="/contact-us">
            Contact us
          </Link>
          <Link className="navlink-item" href="/terms">
            Terms & Conditions
          </Link>
          <Link className="navlink-item" href="/privacy-policy">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
