import { useState } from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

export default function App() {

  return (
      <div>
      <div className='min-h-screen flex flex-col'>
        <main className='flex-grow'>
          <Home />
          <Footer />
        </main>
      </div>
      </div>
  );
}