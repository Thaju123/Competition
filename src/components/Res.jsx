import Data from "../api/Data.json";

export const Res = () => {
  const genders = [...new Set(Data.map(item => item.gender))];
  const getCategories = gender =>
    [...new Set(Data.filter(item => item.gender === gender).map(item => item.category))];
  const getCompetitions = (gender, category) =>
    Data.filter(item => item.gender === gender && item.category === category);

  return (
    <div className="results-container">
      <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Competition Results</h1>
      {genders.map(gender => (
        <div key={gender}>
          <div className="group-header">{gender}</div>
          {getCategories(gender).map(category => (
            <div key={category}>
              <div className="category-header">{category}</div>
              <div className="competition-grid">
                {getCompetitions(gender, category).map(comp => (
                  <div className="competition-card" key={comp.id}>
                    <img src={comp.image} alt={comp.name} />
                    <div className="comp-name">{comp.name}</div>
                    <div>
                      {comp.result ? (
                        <a href={comp.result} target="_blank" rel="noopener noreferrer">
                          <button>View Result</button>
                        </a>
                      ) : (
                        <button disabled>Result Not Published</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
