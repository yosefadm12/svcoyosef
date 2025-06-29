const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

// אמצעי תיווך לקריאת JSON ונתוני טפסים
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // משרת את index.html וה-CSS

// חיבור למסד MongoDB בענן
mongoose.connect('mongodb+srv://yosefadmoni:passforSv@finalprojectserver.m1zmh.mongodb.net/recipesDB')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// סכמת Recipe
const recipeSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    ingredients: [String],
    cookingTime: Number,
    instructions: String,
    imageUrl: String,
    isVegan: Boolean,
    category: String,
    createdAt: { type: Date, default: Date.now },
    rating: Number
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// שליחת index.html בדיפולט
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// קבלת נתוני הטופס ושמירה למסד
app.post('/add-recipe', async (req, res) => {
    try {
        console.log('📥 Received data:', req.body);

        const data = req.body;

        // בדיקה אם ingredients הוא מחרוזת ואז מפצל, אחרת משאיר כפי שהוא
        if (typeof data.ingredients === 'string') {
            data.ingredients = data.ingredients.split(',').map(item => item.trim());
        }

        data.isVegan = data.isVegan === 'true';
        data.calories = Number(data.calories);
        data.cookingTime = Number(data.cookingTime);
        data.rating = Number(data.rating);

        const recipe = new Recipe(data);
        await recipe.save();

        console.log('✅ Saved recipe:', recipe);
        res.send('✅ Recipe added successfully!');
    } catch (error) {
        console.error('❌ Error adding recipe:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
        res.status(500).send('❌ Error adding recipe.');
    }
});

// האזנה לשרת
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
