import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { createTheme} from '@material-ui/core/styles'
import { ThemeProvider} from '@mui/styles';
import Landing from "./components/Landing";
import RegisterPage from "./components/RegisterPage";
import AuthProvider from "./components/AuthProvider";

const theme = {
  palette: {
    primary: {
      main: '#004890'
    },
    secondary: {
      main: '#BCE3F8',
      contrastText: '#000000'
    },
    text: {
      secondary: '#BCE3F8'
    }
  },
  typography: {
    fontFamily: "'Sintony', sans-serif"
  }

}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>  
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
