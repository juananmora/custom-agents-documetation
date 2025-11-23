import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import LandingPageEn from './LandingPage_en';
import { Globe } from 'lucide-react';

function App() {
  const getInitialLanguage = (): 'es' | 'en' => {
    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('language') as 'es' | 'en' | null;
    if (savedLang) {
      return savedLang;
    }
    // Try to detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) {
      return 'en';
    }
    return 'es';
  };

  const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);

  useEffect(() => {
    // Update document title based on language
    document.title = language === 'es' 
      ? 'GitHub Copilot - Guía de Agentes e Instrucciones'
      : 'GitHub Copilot - Guide to Agents and Instructions';
    
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="relative">
      {/* Floating Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="fixed bottom-8 right-8 z-50 bg-[#A100FF] hover:bg-[#7000B8] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      >
        <Globe className="w-5 h-5" />
        <span className="font-bold text-sm uppercase tracking-wider">
          {language === 'es' ? 'EN' : 'ES'}
        </span>
      </button>

      {language === 'es' ? <LandingPage /> : <LandingPageEn />}
    </div>
  );
}

export default App;
