import React, { useState } from 'react';
import { Card } from "flowbite-react";

function CreateRecipe({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([{ name: '' }]);
    const [instructions, setInstructions] = useState('');

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '' }]);
    };

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index].name = event.target.value;
        setIngredients(newIngredients);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            title,
            category,
            ingredients,
            instructions,
        };

        // Appelle la fonction `onSubmit` passée par le parent
        onSubmit(newRecipe);

        // Réinitialisation du formulaire
        setTitle('');
        setCategory('');
        setIngredients([{ name: '' }]);
        setInstructions('');
    };

    return (
        <div className="bg-white px-8 py-6 rounded-lg shadow-lg w-full">
            <Card>
                <div className="bg-[#F0EFEB] px-6 py-4">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Créer une nouvelle recette</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Titre de la recette :</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Catégorie :</label>
                            <input
                                type="text"
                                id="category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Ingrédients :</label>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input
                                        type="text"
                                        value={ingredient.name}
                                        onChange={(event) => handleIngredientChange(index, event)}
                                        placeholder={`Ingrédient ${index + 1}`}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                        required
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addIngredient}
                                className="mt-2 px-4 py-2 text-white bg-stone-400 hover:bg-stone-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                            >
                                Ajouter un ingrédient
                            </button>
                        </div>
                        <div>
                            <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">Instructions :</label>
                            <textarea
                                id="instructions"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-stone-400 hover:bg-stone-500 text-white font-semibold py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
                        >
                            Enregistrer la recette
                        </button>
                    </form>
                </div>
            </Card>
        </div>
    );
}

export default CreateRecipe;