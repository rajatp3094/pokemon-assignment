/**
 * Format Pokemon ID into #001 format
 */
export const formatPokemonId = (id) => {
  if (!id) return '#000';
  const num = String(id).padStart(3, '0');
  return `#${num}`;
};

/**
 * Capitalize first letter of string or hyphenated words
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Format decimeters to meters and feet/inches
 */
export const formatHeight = (decimeters) => {
  if (decimeters === undefined || decimeters === null) return 'N/A';
  const meters = (decimeters / 10).toFixed(1);
  const totalInches = (decimeters * 3.93701);
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${meters} m (${feet}'${inches < 10 ? '0' + inches : inches}")`;
};

/**
 * Format hectograms to kilograms and pounds
 */
export const formatWeight = (hectograms) => {
  if (hectograms === undefined || hectograms === null) return 'N/A';
  const kg = (hectograms / 10).toFixed(1);
  const lbs = (hectograms * 0.220462).toFixed(1);
  return `${kg} kg (${lbs} lbs)`;
};

/**
 * Format stat names to standard gaming abbreviations
 */
export const formatStatName = (name) => {
  switch (name?.toLowerCase()) {
    case 'hp':
      return 'HP';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 'special-attack':
      return 'Sp. Atk';
    case 'special-defense':
      return 'Sp. Def';
    case 'speed':
      return 'Speed';
    default:
      return capitalize(name);
  }
};
