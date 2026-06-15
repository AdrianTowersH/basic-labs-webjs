const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Example data
let videogames = [
    { id: 1, name: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure' },
    { id: 2, name: 'Super Mario Odyssey', genre: 'Platform' },
    { id: 3, name: 'Red Dead Redemption 2', genre: 'Action-adventure' }
];

app.get('/videogames', (req, res) => {
    res.json(videogames);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});