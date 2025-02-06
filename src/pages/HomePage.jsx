/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "../pages/HomePage.css";

function HomePage({ companyListToDisplay }) {
  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      <div className="card">
        {companyListToDisplay.map((companyObj) => (
          <div key={companyObj.id}>
            <NavLink to={`/company/${companyObj.slug}`}>
              <div className="card-content">
                <div className="company-name">{companyObj.name}</div>
                <img src={companyObj.logo} alt="" />
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
