import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Visualization from "./pages/Visualization";


import "./App.css";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/chat"
          element={<Chat />}
        />

        <Route
          path="/visualization"
          element={<Visualization />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;