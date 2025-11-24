import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the child components
vi.mock('./LandingPage', () => ({
  default: () => <div data-testid="landing-page-es">Landing Page ES</div>
}));

vi.mock('./LandingPage_en', () => ({
  default: () => <div data-testid="landing-page-en">Landing Page EN</div>
}));

describe('App Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
    
    // Reset localStorage mock implementation
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
  });

  describe('Language Detection', () => {
    it('should render with Spanish by default when no saved language exists', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
      Object.defineProperty(navigator, 'language', {
        value: 'es-ES',
        configurable: true
      });

      render(<App />);

      expect(screen.getByTestId('landing-page-es')).toBeInTheDocument();
      expect(screen.queryByTestId('landing-page-en')).not.toBeInTheDocument();
    });

    it('should render with English when browser language is English', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
      Object.defineProperty(navigator, 'language', {
        value: 'en-US',
        configurable: true
      });

      render(<App />);

      expect(screen.getByTestId('landing-page-en')).toBeInTheDocument();
      expect(screen.queryByTestId('landing-page-es')).not.toBeInTheDocument();
    });

    it('should use saved language preference from localStorage', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('en');

      render(<App />);

      expect(screen.getByTestId('landing-page-en')).toBeInTheDocument();
      expect(screen.queryByTestId('landing-page-es')).not.toBeInTheDocument();
    });
  });

  describe('Language Toggle', () => {
    it('should toggle from Spanish to English when button is clicked', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
      vi.spyOn(Storage.prototype, 'setItem');
      Object.defineProperty(navigator, 'language', {
        value: 'es-ES',
        configurable: true
      });

      render(<App />);

      // Initially Spanish
      expect(screen.getByTestId('landing-page-es')).toBeInTheDocument();

      // Click language toggle button - use title attribute
      const toggleButton = screen.getByTitle('Switch to English');
      fireEvent.click(toggleButton);

      // Should now be English
      expect(screen.getByTestId('landing-page-en')).toBeInTheDocument();
      expect(screen.queryByTestId('landing-page-es')).not.toBeInTheDocument();
      expect(localStorage.setItem).toHaveBeenCalledWith('language', 'en');
    });

    it('should toggle from English to Spanish when button is clicked', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue('en'),
          setItem: vi.fn(),
        },
        writable: true,
      });

      render(<App />);

      // Initially English
      expect(screen.getByTestId('landing-page-en')).toBeInTheDocument();

      // Click language toggle button
      const toggleButton = screen.getByTitle('Cambiar a Español');
      fireEvent.click(toggleButton);

      // Should now be Spanish
      expect(screen.getByTestId('landing-page-es')).toBeInTheDocument();
      expect(screen.queryByTestId('landing-page-en')).not.toBeInTheDocument();
      expect(localStorage.setItem).toHaveBeenCalledWith('language', 'es');
    });
  });

  describe('Language Toggle Button', () => {
    it('should display "EN" text when current language is Spanish', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue(null),
          setItem: vi.fn(),
        },
        writable: true,
      });
      Object.defineProperty(navigator, 'language', {
        value: 'es-ES',
        configurable: true
      });

      render(<App />);

      const toggleButton = screen.getByTitle('Switch to English');
      expect(toggleButton).toHaveTextContent('EN');
    });

    it('should display "ES" text when current language is English', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue('en'),
          setItem: vi.fn(),
        },
        writable: true,
      });

      render(<App />);

      const toggleButton = screen.getByTitle('Cambiar a Español');
      expect(toggleButton).toHaveTextContent('ES');
    });

    it('should have proper styling classes', () => {
      render(<App />);

      const toggleButton = screen.getByRole('button');
      expect(toggleButton).toHaveClass('fixed', 'bottom-8', 'right-8', 'z-50');
    });
  });

  describe('Document Updates', () => {
    it('should update document title when language is Spanish', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue(null),
          setItem: vi.fn(),
        },
        writable: true,
      });
      Object.defineProperty(navigator, 'language', {
        value: 'es-ES',
        configurable: true
      });

      render(<App />);

      expect(document.title).toBe('GitHub Copilot - Guía de Agentes e Instrucciones');
    });

    it('should update document title when language is English', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue(null),
          setItem: vi.fn(),
        },
        writable: true,
      });
      Object.defineProperty(navigator, 'language', {
        value: 'en-US',
        configurable: true
      });

      render(<App />);

      expect(document.title).toBe('GitHub Copilot - Guide to Agents and Instructions');
    });

    it('should update html lang attribute when language is Spanish', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue(null),
          setItem: vi.fn(),
        },
        writable: true,
      });
      Object.defineProperty(navigator, 'language', {
        value: 'es-ES',
        configurable: true
      });

      render(<App />);

      expect(document.documentElement.lang).toBe('es');
    });

    it('should update html lang attribute when language is English', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: vi.fn().mockReturnValue(null),
          setItem: vi.fn(),
        },
        writable: true,
      });
      Object.defineProperty(navigator, 'language', {
        value: 'en-US',
        configurable: true
      });

      render(<App />);

      expect(document.documentElement.lang).toBe('en');
    });
  });
});
