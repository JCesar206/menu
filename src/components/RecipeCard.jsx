export default function RecipeCard({ title, image, description, onEdit, onDelete }) {
	return (
	  <div className='bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xs transition transform hover:scale-105'>
		<img src={image} alt={title} className='w-full h-48 object-cover' />
		<div className='p-4 text-center'>
		  <h3 className='text-xl font-bold text-orange-600 mb-2'>{title}</h3>
		  <p className='text-gray-600 text-sm mb-4'>{description}</p>
		  <div className='flex justify-center space-x-4'>
			<button
			  onClick={onEdit}
			  className='px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600'
			>
			  Editar ✏️
			</button>
			<button
			  onClick={onDelete}
			  className='px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600'
			>
			  Eliminar 🗑️
			</button>
		  </div>
		</div>
	  </div>
	);
  }
  