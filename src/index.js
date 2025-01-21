const characters = [
    "Link", 
    "Zelda", 
    "Ganon", 
    "Navi", 
    "Impa", 
    "Midna", 
    "Darunia", 
    "Rauru", 
    "Saria", 
    "Nabooru", 
    "Skull Kid", 
    "Tingle", 
    "Dark Link", 
    "Vaati", 
    "Hilda", 
    "Tetra", 
    "Ganondorf", 
    "Fi", 
    "Linebeck", 
    "Zant", 
    "Ghirahim", 
    "Pipit", 
    "Groose", 
    "Faron", 
    "Yunobo", 
    "Sidon", 
    "Revali", 
    "Daruk", 
    "Mipha", 
    "Koume", 
    "Kotake", 
    "Bladon", 
    "The King of Red Lions", 
    "Agahnim", 
    "Ravio", 
    "Master Kohga", 
    "Hilda", 
    "Ciela", 
    "Princess Ruto", 
    "Talon", 
    "Ingo", 
    "King Daphnes"
];

const zeldaCharacter = () => {
    const character = characters[Math.floor(Math.random() * characters.length)];
    console.log(`\x1b[34m${character}\x1b[89m`);
}

module.exports = {
    zeldaCharacter
};