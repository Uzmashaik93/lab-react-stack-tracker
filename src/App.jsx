import { useState } from "react";

import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companyList, setCompanyList] = useState(companies);
  const [technologyList, setTechnologyList] = useState(technologies);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage companyListToDisplay={companyList} />}
        />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companyList={companies} />}
        />
        <Route
          path="/tech/:slug"
          element={<TechnologyPage techList={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
