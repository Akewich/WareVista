export enum iThemeMode {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface iThemeContext {
    themeMode : iThemeMode;
    switchThemeMode: (mode: iThemeMode) => void
}   