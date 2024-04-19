import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  console.log("DASHBOARD PAGE");
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <h2>Welcome to Dashboard</h2>
      ) : (
        <p>Please login to access the dashboard</p>
      )}
    </div>
  );
};

export default Dashboard;
