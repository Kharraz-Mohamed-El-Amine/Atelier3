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
        .split('\n')                           // Diviser les noms de jeux
        .map(jeu => jeu.toUpperCase())         // Convertir en majuscules
        .filter(jeu => jeu.includes('I'))      // Filtrer les jeux avec 'I'
        .forEach(jeu => console.log(` ${jeu}`)); // Imprimer chaque jeu
};

traiterJeux(texte);