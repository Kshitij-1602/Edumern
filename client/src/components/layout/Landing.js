import React from "react";
import logo from "./logo2.jpg";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div style={{ gridColumnStart: 'sidebar', gridColumnEnd: 'content' }}>
      <div style={landing}>
        <div style={landingContainer}>
          <img style={imgStyle} src={logo} alt="logo" />
          <h1>Welcome to EduForum</h1>
          <Button style={buttonStyle} component={Link} to="/login">
            Sign In
        </Button>
          <Button style={buttonStyle} component={Link} to="/register">
            Register
        </Button>
        </div>
      </div>
    </div>
  );
}

const landing = {
  height: "100vh",
  background: "#f8f8f8",
  display: "grid",
  placeItems: "center",
};

const landingContainer = {
  padding: "100px",
  textAlign: "center",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 1px 3px #231233",
};

const imgStyle = {
  objectFit: "contain",
  height: "100px",
  marginBottom: "40px",
  opacity: "0.8",
  borderRadius: "20px",
};

const buttonStyle = {
  marginTop: "50px",
  marginLeft: "15px",
  marginRight: "15px",
  padding: "15px",
  textTransform: "inherit",
  // backgroundColor: '#15a82d !important',
  backgroundColor: "#15a82d",
  color: "white",
};

export default Landing;
