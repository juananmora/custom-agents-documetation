// Theme configuration for Accenture and BBVA brands

export type ThemeVersion = 'accenture' | 'bbva';

export interface ThemeColors {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  text: string;
  textLight: string;
  background: string;
  backgroundAlt: string;
  border: string;
}

export const themes: Record<ThemeVersion, ThemeColors> = {
  accenture: {
    primary: '#A100FF',
    primaryDark: '#7000B8',
    primaryLight: '#C866FF',
    secondary: '#000000',
    text: '#323232',
    textLight: '#666666',
    background: '#FFFFFF',
    backgroundAlt: '#F3F2F1',
    border: '#E5E5E5',
  },
  bbva: {
    primary: '#004481',
    primaryDark: '#003366',
    primaryLight: '#1973B8',
    secondary: '#00A1E0',
    text: '#2C3E50',
    textLight: '#5A6872',
    background: '#FFFFFF',
    backgroundAlt: '#F4F8FB',
    border: '#D3DCE6',
  },
};

export const getThemeConfig = (version: ThemeVersion) => themes[version];
