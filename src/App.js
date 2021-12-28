import "./App.css";
// import Example from "./Example";
import Catogeries from "./Components/Catogeries";
import Dashboard from "./Components/Dashboard";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        
        <Dashboard />
        <Catogeries />
        
        {/* <Example /> */}
      </Container>
    </div>
  );
}

export default App;
