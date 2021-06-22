import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Saved</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
