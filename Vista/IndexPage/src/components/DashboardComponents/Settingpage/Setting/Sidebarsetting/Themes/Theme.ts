import { createTheme, Theme} from '@mui/material';

export const appLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: '#DCDFE7',
      paper: '#fff'
    }
  }
})

export const appDarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(33,37,39)',
      paper: 'rgb(41,44,49)'
    }
  }
})
