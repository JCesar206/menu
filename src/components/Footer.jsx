import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return(
    <footer className='bg-gray-800 text-white py-4 mt-auto'>
      <div className='container mx-auto text-center flex flex-col items-center gap-2'>
        <div className='flex justify-center space-x-6 text-2xl'>
          <a href='https://github.com/JCesar206' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='hover:text-lime-400 transition'/>
          </a>
          <a href='https://www.linkedin.com/in/jcesar206' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='hover:text-purple-400 transition'/>
          </a>
          <a href='mailto:jcesar206@hotmail.com'>
            <FaEnvelope className='hover:text-blue-400 transition'/>
          </a>
        </div>
          <p className='text-sm'>&copy; {new Date().getFullYear()} MenuLoko V 1.0 JulyDevops. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}