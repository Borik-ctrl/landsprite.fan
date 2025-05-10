// Glossary.js
import React, { useState } from 'react';
import './compendium.css'; // Import the CSS file for styling
import glossaryData from './data/compendiumData'; // Import the glossary data

const Compendium = () => {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [imageOnlyView, setImageOnlyView] = useState(false);

  // Filter the glossary data based on the filter input and category
  const filteredData = glossaryData.filter(item =>
    item.term.toLowerCase().includes(filter.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter)
  );

  return (
    <div className="glossary-container">
      <h1 className="glossary-title">Compendium</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="search-input"
      />
      <select
        value={categoryFilter}
        onChange={e => setCategoryFilter(e.target.value)}
        className="category-select"
      >
        <option value="All">All</option>
        <option value="Foraging">Foraging</option>
        <option value="Monsters">Monsters</option>
        <option value="Loot">Loot</option>
      </select>
      <button
        onClick={() => setImageOnlyView(!imageOnlyView)}
        className="toggle-view-button">
        {imageOnlyView ? 'Show Details' : 'Show Images Only'}
      </button>
      <ul className={`glossary-list ${imageOnlyView ? 'image-only-view' : ''}`}>
        {filteredData.map((item, index) => (
          <li key={index} className={`glossary-item ${item.isElite ? 'image-elite-border' : ''}`} >
            <img src={item.image} alt={item.term}  width="40px" height="40px" className="glossary-image"/>
            {!imageOnlyView && (
              <div className="glossary-content">
                <strong className="glossary-term">{item.term}</strong>
                <p className="glossary-description">{item.description}</p>
                <p className="glossary-meta"><strong>Category:</strong> {item.category}</p>
                <p className="glossary-meta"><strong>Found At:</strong> {item.foundAt}</p>
                {item.npcSellPrice && (
                  <>
                    <p className="glossary-meta"><strong>Sell Price (NPC-Clerk):</strong> {item.npcSellPrice} <img src="./src/assets/others/gold.png" alt="Gold" /></p>
                  </>
                )}
                {item.level && (
                  <>
                    <p className="glossary-meta"><strong>Level:</strong> {item.level}</p>
                  </>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compendium;
