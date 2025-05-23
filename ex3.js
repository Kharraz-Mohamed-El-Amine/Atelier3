const texte = `
Super Mario Bros
Call of Duty
Final Fantasy
Minecraft adventures
World of Warcraft
Assassin's Creed
Counter Strike
League of Legends
Grand Theft Auto`;
const traiterJeux = (texte) => {
    return texte
        .split('\n')                           
        .map(jeu => jeu.toUpperCase())         
        .filter(jeu => jeu.includes('I'))      
        .forEach(jeu => console.log(` ${jeu}`)); 
};

traiterJeux(texte);
