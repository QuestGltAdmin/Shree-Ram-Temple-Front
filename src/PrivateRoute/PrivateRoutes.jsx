import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const UserPrivateRoute = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isUserAuthenticated');

    if (isAuthenticated !== null) {
      const isAuthenticatedBool = JSON.parse(isAuthenticated);
      setIsUserAuthenticated(isAuthenticatedBool);
    }

    setLoading(false);
  }, []);

  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isUserAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default UserPrivateRoute;
