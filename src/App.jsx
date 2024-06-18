import { Header, Footer, Container } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default App;
