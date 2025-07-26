import { useEffect, useState } from 'react';

export default function RecipeForm({ onAdd, initialData, editing }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setImageFile(initialData.image);
    }
  }, [initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localURL = URL.createObjectURL(file);
      setImageFile(localURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !imageFile) return;

    const newRecipe = {
      title,
      image: imageFile,
      description,
    };

    onAdd(newRecipe);
    setTitle('');
    setDescription('');
    setImageFile(null);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-6 rounded-xl shadow-md w-full max-w-xl mb-8'
    >
      <h2 className='text-2xl font-bold text-orange-600 mb-4 text-center'>
        {editing ? '✏️ Edita tu receta' : '📝 Agrega tu receta'}
      </h2>

      <input
        type='text'
        placeholder='Nombre de la receta'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full p-2 mb-4 border rounded-md'
      />
      <input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        className='w-full p-2 mb-4 border rounded-md'
      />
      <textarea
        placeholder='Descripción'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='w-full p-2 mb-4 border rounded-md'
      />
      <button
        type='submit'
        className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full'
      >
        {editing ? 'Guardar cambios 💾' : 'Agregar receta 🍽️'}
      </button>
    </form>
  );
}
