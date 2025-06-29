const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yosefadmoni:passforSv@finalprojectserver.m1zmh.mongodb.net/recipesDB')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

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

const recipes = [
    {
        name: 'Pasta Pesto',
        calories: 450,
        ingredients: ['pasta', 'basil', 'olive oil', 'garlic', 'nuts'],
        cookingTime: 20,
        instructions: 'Cook pasta, blend basil and nuts, mix with pasta.',
        imageUrl: 'http://example.com/pasta.jpg',
        isVegan: true,
        category: 'Main Dish',
        rating: 4
    },
    {
        name: 'Chocolate Cake',
        calories: 600,
        ingredients: ['flour', 'cocoa', 'sugar', 'eggs', 'butter'],
        cookingTime: 60,
        instructions: 'Mix ingredients, bake in oven for 45 min.',
        imageUrl: 'http://example.com/cake.jpg',
        isVegan: false,
        category: 'Dessert',
        rating: 5
    },
    {
        name: 'Greek Salad',
        calories: 200,
        ingredients: ['tomato', 'cucumber', 'feta cheese', 'olive oil'],
        cookingTime: 10,
        instructions: 'Mix all ingredients and serve fresh.',
        imageUrl: 'http://example.com/salad.jpg',
        isVegan: false,
        category: 'Salad',
        rating: 4
    }
];

async function saveRecipes() {
    try {
        await Recipe.insertMany(recipes);
        console.log('Recipes saved successfully!');
    } catch (error) {
        console.error('Error saving recipes:', error);
    } finally {
        mongoose.connection.close();
    }
}

saveRecipes();
