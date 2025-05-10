import bluelily from '../assets/foraging/bluelily.png';
import bead from '../assets/others/bead.png';
import shardt1 from '../assets/others/shardt1.png';
import shardt5 from '../assets/others/shardt5.png';
import bat from '../assets/others/bat.png';
import goblin from '../assets/others/goblin.png';
import snek from '../assets/others/snek.png';
import babyspider from '../assets/others/babyspider.png';
import spider from '../assets/others/spider.png';
import skeleton from '../assets/others/skeleton.jpg';
import spectre from '../assets/others/spectre.jpg';
import rooster from '../assets/others/rooster.jpg';
import rat from '../assets/others/rat.jpg';
import ogrelord from '../assets/others/ogrelord.jpg';
import ogre from '../assets/others/ogre.jpg';
import minidragon from '../assets/others/minidragon.jpg';
import mantis from '../assets/others/mantis.jpg';
import lavaslime from '../assets/others/lavaslime.jpg';
import golem from '../assets/others/golem.jpg';
import forestdragon from '../assets/others/forestdragon.jpg';
import cursedhahoemask from '../assets/others/cursedhahoemask.jpg';
import crab from '../assets/others/crab.jpg';
import cactus from '../assets/others/cactus.jpg';
import beetle from '../assets/others/beetle.jpg';
import octopus from '../assets/npc/octopus.jpg';
// Add more imports as needed

const compendiumData = [
    {
      term: 'Bluelily',
      image: bluelily,
      description: 'A blue lily, a flower that can be used for crafting stuff',
      category: 'Foraging',
      foundAt: 'Bush',
      npcSellPrice: '6',
      bush: '',
      level: '1'
    },
    {
      term: 'Bead',
      image: bead,
      description: 'A bead hat emanates magical properties. Can be used in conjunction with other items to create magical items.',
      category: 'Loot',
      foundAt: 'Monster Loot',
      npcSellPrice: '5'
    },
    {
      term: 'Shard - Tier 1',
      image: shardt1,
      description: 'TBD',
      category: 'Loot',
      foundAt: 'Monster Loot',
      npcSellPrice: '3750'
    },
    {
      term: 'Shard - Tier 5',
      image: shardt5,
      description: 'TBD',
      category: 'Loot',
      foundAt: 'Monster Loot',
      npcSellPrice: '3750'
    },
    {
      term: 'Bat',
      image: bat,
      description: 'TBD',
      category: 'Monsters',
      foundAt: 'Cave',
      npcSellPrice: '',
      level: '3'
    },
    {
      term: 'Goblin',
      image: goblin,
      description: 'TBD',
      category: 'Monsters',
      foundAt: 'Cave',
      npcSellPrice: '',
      level: '7'
    },
    {
      term: 'Snake',
      image: snek,
      description: '',
      category: 'Monsters',
      foundAt: 'Cave',
      npcSellPrice: '',
      level: '3'
    },
    {
      term: 'Baby Spooder',
      image: babyspider,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Spooder',
      image: spider,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Skeleton',
      image: skeleton,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Skeleton',
      image: spectre,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Skeleton',
      image: rooster,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Skeleton',
      image: rat,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Ogrelord',
      image: ogrelord,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: '',
      isElite: true,
    },
    {
      term: 'Ogre',
      image: ogre,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Mini Dragon',
      image: minidragon,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Mantis',
      image: mantis,
      description: '',
      category: 'Monsters',
      foundAt: 'Desert',
      npcSellPrice: '',
      level: '36'
    },
    {
      term: 'Lava Slime',
      image: lavaslime,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Golem',
      image: golem,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: ''
    },
    {
      term: 'Dragon',
      image: forestdragon,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: '',
      isElite: true,
    },
    {
      term: 'Mask Man',
      image: cursedhahoemask,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: '',
      isElite: false,
    },
    {
      term: 'Crab',
      image: crab,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: '1',
      isElite: false,
    },
    {
      term: 'Cactus',
      image: cactus,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: '',
      isElite: false,
    },
    {
      term: 'Beetle',
      image: beetle,
      description: '',
      category: 'Monsters',
      foundAt: '',
      npcSellPrice: '',
      level: '',
      isElite: false,
    },
    {
      term: 'Octopus',
      image: octopus,
      description: '',
      category: 'NPC',
      foundAt: '',
      npcSellPrice: '',
      level: '',
      isElite: false,
    },
    // Add more terms as needed
  ];

export default compendiumData;