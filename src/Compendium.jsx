// compendium.js
import React, { useState } from 'react';
import './compendium.css'; // Import the CSS file for styling
import compendiumData from './data/compendiumData.js'; // Import the compendium data




const Compendium = () => {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [imageOnlyView, setImageOnlyView] = useState(true);

console.log(compendiumData);


  // Filter the compendium data based on the filter input and category
  const filteredData = compendiumData.filter(item =>
    item.term.toLowerCase().includes(filter.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter)
  );

  return (
    <div className="compendium-container">
      <h1 className="compendium-title">Compendium</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="search-input"
      />
      <div className="category-selection">
        <label>
          <input
            type="radio"
            value="All"
            checked={categoryFilter === 'All'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="Loot"
            checked={categoryFilter === 'Loot'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          Loot
        </label>
        <label>
          <input
            type="radio"
            value="Monsters"
            checked={categoryFilter === 'Monsters'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          Monsters
        </label>
        <label>
          <input
            type="radio"
            value="Foraging"
            checked={categoryFilter === 'Foraging'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          Foraging
        </label>
        <label>
          <input
            type="radio"
            value="Weapons"
            checked={categoryFilter === 'Weapons'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          Weapons
        </label>
        <label>
          <input
            type="radio"
            value="NPC"
            checked={categoryFilter === 'NPC'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          NPC
        </label>
      </div>
      <button
        onClick={() => setImageOnlyView(!imageOnlyView)}
        className="toggle-view-button">
        {imageOnlyView ? 'Show Details' : 'Show Images Only'}
      </button>

      <ul className={`compendium-list ${imageOnlyView ? 'image-only-view' : ''}`}>
        {filteredData.map((item, index) => (
          <li key={index} className={`compendium-item ${item.isElite ? 'image-elite-border' : ''}`} title={
            imageOnlyView
              ? `Term: ${item.term}\nDescription: ${item.description}\nCategory: ${item.category}\nFound At: ${item.foundAt}${item.npcSellPrice ? '\nSell Price: '+item.npcSellPrice : ''}\nLevel: ${item.level || 'N/A'}`
              : ''
          }>
            {imageOnlyView && (<p className="compendium-term-small">{item.term}</p>)}
            <img src={item.image} alt={item.term} width="40px" height="40px" className="compendium-image" />
            {!imageOnlyView && (
              <div className="compendium-content">
                <strong className="compendium-term">{item.term}</strong>
                <p className="compendium-description">{item.description}</p>
                {/* <p className="compendium-meta"><strong>Category:</strong> {item.category}</p> */}
                <p className="compendium-meta"><strong>Found At:</strong> {item.foundAt}</p>
                {item.npcSellPrice && (
                  <>
                    <p className="compendium-meta"><strong>Sell Price (NPC-Clerk):</strong> {item.npcSellPrice} <img src="./src/assets/others/gold.png" alt="Gold" /></p>
                  </>
                )}
                {item.level && (
                  <>
                    <p className="compendium-meta"><strong>Level:</strong> {item.level}</p>
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
