import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar sticky="top" bg="primary" varient="dark">
        <i className="fas fa-ghost me-2 ms-2" />
        Ghost Admin
      </Navbar>
    </div>
  );
};

export default Navigation;
