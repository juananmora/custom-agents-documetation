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
    primary: '#1464A5',
    primaryDark: '#14549C',
    primaryLight: '#5C9FD4',
    secondary: '#000000',
    text: '#000000',
    textLight: '#666666',
    background: '#FFFFFF',
    backgroundAlt: '#D4EDFC',
    border: '#E0E0E0',
  },
};

export const getThemeConfig = (version: ThemeVersion) => themes[version];
