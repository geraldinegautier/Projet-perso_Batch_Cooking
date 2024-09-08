import React from 'react';
import CreateRecipe from "../components/CreateRecipe";


function RecipePage() {
    // Fonction qui sera appelée lors de la soumission du formulaire
    const handleRecipeSubmit = (newRecipe) => {
        console.log('Recette soumise :', newRecipe);

        // // Envoie les données au backend
        // fetch('/api/recipes', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newRecipe),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Recette enregistrée :', data);
        //         // Tu peux ajouter ici des actions supplémentaires après l'envoi
        //     })
        //     .catch((error) => {
        //         console.error('Erreur lors de l\'envoi :', error);
        //     });
    };

    return (
        <div className="flex justify-center items-center h-full w-full bg-gray-100 shadow-lg rounded-lg p-8">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Nouvelle recette</h1>
                <CreateRecipe onSubmit={handleRecipeSubmit} />
            </div>
        </div>
    );
}

export default RecipePage;