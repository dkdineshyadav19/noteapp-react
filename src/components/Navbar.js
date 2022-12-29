import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand navbar-dark bg-dark p-2">
        <p className="navbar-brand text-light" >
          KeepNotes
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          
          
          </ul>
        </div>
      </nav>
    </div>
  );
}
