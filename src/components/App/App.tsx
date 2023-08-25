import { Navigate, Route, Routes } from "react-router-dom";
import CreatePage from "../../pages/CreatePage/CreatePage";
import ListPage from "../../pages/ListPage/ListPage";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-container">
        <header>
          <h1>ROBOTS</h1>
        </header>
        <Routes>
          <Route path="/home" element={<ListPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
