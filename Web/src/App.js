import './App.css';
import { Route, Routes } from "react-router-dom";

import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import Footer from "./components/footer/footer";

import CatalogPage from "./pages/catalog-page/catalog-page";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header/>
        <div className="main-section">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </div>
        <Footer/>
      </>
    </ThemeProvider>
  )
}

export default App;
