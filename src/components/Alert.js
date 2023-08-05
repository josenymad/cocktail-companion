import React from "react";
import "../styles/alert.css";

const Alert = ({ alert }) => {
  if (!alert) return null;
  return <div className="alert">{alert}</div>;
};

export default Alert;
