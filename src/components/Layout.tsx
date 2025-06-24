import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="min-h-screen font-outfit"
      style={{
        backgroundColor: '#fbcfe8',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/axiom-pattern.png")',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;