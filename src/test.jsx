// Bestiary.js
import React, { useState } from 'react';
import './Bestiary.css'; // Import the CSS file for styling

const Bestiary = () => {
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [imageOnlyView, setImageOnlyView] = useState(false);

  // Sample bestiary data with additional fields
  const bestiaryData = [
    {
      term: 'Venus Flytrap',
      image: 'https://example.com/venus_flytrap.jpg',
      description: 'A carnivorous plant that catches and digests insects.',
      category: 'Plants',
      foundAt: 'Forest of Whispers',
      npcSell: 'Herbalist Hilda'
    },
    {
      term: 'Goblin',
      image: 'https://example.com/goblin.jpg',
      description: 'A small, mischievous creature often found in fantasy literature.',
      category: 'Monsters',
      foundAt: 'Caverns of Chaos',
      npcSell: 'Blacksmith Boris'
    },
    {
      term: 'Oak Tree',
      image: 'https://example.com/oak_tree.jpg',
      description: 'A large tree known for its strength and longevity.',
      category: 'Plants',
      foundAt: 'Enchanted Grove',
      npcSell: 'Woodcutter Wilfred'
    },
    {
      term: 'Dragon',
      image: 'https://example.com/dragon.jpg',
      description: 'A mythical creature often depicted as a large, flying reptile.',
      category: 'Monsters',
      foundAt: 'Dragon\'s Peak',
      npcSell: 'Dragon Tamer Drake'
    },
    // Add more terms as needed
  ];

  // Filter the bestiary data based on the filter input and category
  const filteredData = bestiaryData.filter(item =>
    item.term.toLowerCase().includes(filter.toLowerCase()) &&
    (categoryFilter === 'All' || item.category === categoryFilter)
  );

  return (
    <div className="bestiary-container">
      <h1 className="bestiary-title">Bestiary</h1>
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
            value="Plants"
            checked={categoryFilter === 'Plants'}
            onChange={e => setCategoryFilter(e.target.value)}
          />
          Plants
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
      </div>
      <button
        onClick={() => setImageOnlyView(!imageOnlyView)}
        className="toggle-view-button"
      >
        {imageOnlyView ? 'Show Details' : 'Show Images Only'}
      </button>
      <ul className={`bestiary-list ${imageOnlyView ? 'image-only-view' : ''}`}>
        {filteredData.map((item, index) => (
          <li key={index} className="bestiary-item">
            <img src={item.image} alt={item.term} className="bestiary-image" />
            {!imageOnlyView && (
              <div className="bestiary-content">
                <strong className="bestiary-term">{item.term}</strong>
                <p className="bestiary-description">{item.description}</p>
                <p className="bestiary-meta"><strong>Category:</strong> {item.category}</p>
                <p className="bestiary-meta"><strong>Found At:</strong> {item.foundAt}</p>
                <p className="bestiary-meta"><strong>NPC Sell:</strong> {item.npcSell}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bestiary;
