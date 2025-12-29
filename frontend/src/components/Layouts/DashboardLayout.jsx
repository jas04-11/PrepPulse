import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />

      {user && (
        <main className="pt-16">
          {children}
        </main>
      )}
    </div>
  );
};

export default DashboardLayout;
