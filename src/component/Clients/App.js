import Tabs from "./Tabs";
import Dashboard from "./Dashboard";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { useAddEventMutation } from "../../services/events";

function App() {
  const state = useSelector(state => state.user);

  const handleSubmit = () =>{
    // useAddEventMutation({ body: state });
  };
  return (
    <div>
      <Container maxWidth="xl">

        <Dashboard />
        <Tabs />

        <button onClick={handleSubmit}>
          Submit
        </button>

      </Container>
    </div>
  );
}

export default App;
