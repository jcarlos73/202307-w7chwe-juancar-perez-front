import { Navigate, Route, Routes } from "react-router-dom";
import CreatePage from "../../pages/CreatePage";
import ListPage from "../../pages/ListPage";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/home" element={<ListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
};

export default App;
