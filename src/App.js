import "./App.css";
import Tabs from "./Components/Tabs";
import Dashboard from "./Components/Dashboard";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        
        <Dashboard />
        <Tabs />
        
      </Container>
    </div>
  );
}

export default App;
