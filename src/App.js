import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createTheme, ThemeProvider,responsiveFontSizes  } from '@mui/material/styles';
import Landing from "./components/Landing";
import RegisterPage from "./components/RegisterPage";
import AuthProvider from "./components/AuthProvider";
import Appbar from './components/appbar/Appbar'
let  theme = createTheme({
  palette: {
    primary: {
      main: '#004890'
    },
    secondary: {
      main: '#BCE3F8',
      contrastText: '#000000'
    },
    text: {
      secondary: '#4f4fff'
    }
  },
  typography: {
    fontFamily: "'Sintony', sans-serif"
  }

})

theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>  
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={RegisterPage} />
            <Route path='/dashboard' component={Appbar}/>
          </Switch>
        </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
