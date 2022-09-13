import NavBar from "./components/NavBar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Series from "./pages/Series";
import Searching from "./pages/Searching";
import Login from "./pages/Login";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <div className=" py-[90px] text-white">
          <Container>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/series" element={<Series />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/searching" element={<Searching />} />
              <Route exact path="/account" element={<Account />} />{" "}
              <Route exact path="/" element={<Trending />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
