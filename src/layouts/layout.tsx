import Navbar from "@/components/navbars";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} - TKT</p>
      </footer>
    </div>
  );
};

export default Layout;
