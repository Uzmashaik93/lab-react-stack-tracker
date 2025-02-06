/* eslint-disable react/prop-types */
import { NavLink, useParams } from "react-router-dom";

import "../pages/CompanyPage.css";

function CompanyPage({ companyList }) {
  const { companySlug } = useParams();

  const company = companyList.find((companyObj) => {
    return companyObj.slug == companySlug;
  });

  return (
    <div className="card">
      <img src={company.logo} alt={company.name} />
      <div>
        <h3>About</h3>
        <p>{company.description}</p>
      </div>
      <div>
        <div style={{ display: "flex", gap: 100 }}>
          {company.techStack.map((techstackObj, i) => {
            return (
              <div key={i} style={{ width: 50 }}>
                <NavLink to={`/tech/${techstackObj.slug}`}>
                  <img
                    src={techstackObj.image}
                    alt={techstackObj.slug}
                    style={{ width: 100 }}
                  />
                  <h4>{techstackObj.name}</h4>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
