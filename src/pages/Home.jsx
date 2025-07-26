import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/RecipeForm';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("recetas");
    if (stored) {
      setRecipes(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recetas', JSON.stringify(recipes));
  }, [recipes]);

  const addOrUpdateRecipe = (recipe) => {
    if (editIndex !== null) {
      const updated = [...recipes];
      updated[editIndex] = recipe;
      setRecipes(updated);
      setEditIndex(null);
    } else {
      setRecipes([recipe, ...recipes]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = recipes.filter((_, i) => i !== index);
    setRecipes(updated);
  };

  return (
    <section className='flex flex-col items-center justify-center p-6 text-center'>
      <RecipeForm
        onAdd={addOrUpdateRecipe}
        initialData={editIndex !== null ? recipes[editIndex] : null}
        editing={editIndex !== null}
      />

      <h1 className='text-4xl font-bold text-orange-600 mb-6'>🍳 Recetas Guardadas</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {recipes.map((recipe, idx) => (
          <RecipeCard
            key={idx}
            title={recipe.title}
            image={recipe.image}
            description={recipe.description}
            onEdit={() => handleEdit(idx)}
            onDelete={() => handleDelete(idx)}
          />
        ))}
      </div>
    </section>
  );
}
