export enum iThemeMode {
    LIGHT = 'ligh',
    DARK = 'dark'
}

export interface iThemeContext {
    themeMode : iThemeMode;
    switchThemeMode: (mode: iThemeMode) => void
}