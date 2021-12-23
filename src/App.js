import "./App.css";
import Catogeries from "./Components/Catogeries";
import Dashboard from "./Components/Dashboard";
import { Container } from "@mui/material";

function App() {
  return (
    <div >
      <Container maxWidth="xl">
        <Dashboard />
        <Catogeries />
      </Container>
    </div>
  );
}

export default App;
