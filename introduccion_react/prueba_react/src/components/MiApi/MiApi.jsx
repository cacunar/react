import React, { useEffect, useState } from "react";
import Buscador from "../Buscador/Buscador";
import "./MiApi.css";

const FetchData = () => {
  const [heroes, setHeroes] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        const apiKey = "742d9ec1019d7872fe012f4ff6dc8fe0";
        const hash = "1b1a40498180709906cc9714210f3162";
        const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=100`;
        const r = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        const jsondata = await r.json();
        console.log(jsondata.data.results);
        setHeroes(jsondata.data.results);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    getApi();
  }, []);

  useEffect(()=> {
    setFilteredHeroes(
      heroes.filter(hero => hero.name.toLowerCase().startsWith (filter.toLocaleLowerCase()))
    );
    setCurrentPage(1)
  }, [filter, heroes]);

  const handleSearch = (searchText) => {
    setFilter(searchText);
  }
 
  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  const pageCount = Math.ceil(filteredHeroes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredHeroes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Buscador onSearch={handleSearch} />
      <div className="row">
        {currentItems.map((hero) => (
          <div
            key={hero.id}
            className="col-md-4 mb-4"
            onClick={() => handleHeroClick(hero)}
          >
            <div className="card">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                className="card-img-top"
                alt={hero.name}
                width={250}
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedHero && (
        <div className="modal active">
          <div className="modal-content" style={{ display: "flex", flexDirection: "row-reverse" }}>
            <img src={`${selectedHero.thumbnail.path}.${selectedHero.thumbnail.extension}`} alt={selectedHero.name} style={{ width: "50%", objectFit: "cover" }} />
            <div style={{ flex: 1, overflowY: "auto", maxHeight: "500px", padding: "20px", textAlign: "left" }}>
              <h4>{selectedHero.name}</h4>
              <p>{selectedHero.description || "No description available."}</p>
              <p>Last Modified: {new Date(selectedHero.modified).toLocaleDateString()}</p>
              <h5>Comics ({selectedHero.comics.available})</h5>
              <ul>
                {selectedHero.comics.items.map((comic, index) => (
                  <li key={index}>{comic.name}</li>
                ))}
              </ul>
              <h5>Series ({selectedHero.series.available})</h5>
              <ul>
                {selectedHero.series.items.map((serie, index) => (
                  <li key={index}>{serie.name}</li>
                ))}
              </ul>
              <h5>Stories ({selectedHero.stories.available})</h5>
              <ul>
                {selectedHero.stories.items.map((story, index) => (
                  <li key={index}>
                    {story.name}
                  </li>
                ))}
              </ul>
              <button className="close-button" onClick={() => setSelectedHero(null)}>X</button>
            </div>
          </div>
        </div>
      )}
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
