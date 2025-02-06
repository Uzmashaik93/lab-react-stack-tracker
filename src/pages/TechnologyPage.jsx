import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function TechnologyPage({ techList }) {
  const { slug } = useParams();

  const technology = techList.find((techObj) => {
    return techObj.slug == slug;
  });
  console.log(technology);

  return (
    <div className="card">
      <img src={technology.image} alt={technology.name} />
      <div>
        <h1>{technology.name}</h1>
        <h3>About</h3>
        <p>{technology.description}</p>
      </div>
    </div>
  );
}

export default TechnologyPage;
