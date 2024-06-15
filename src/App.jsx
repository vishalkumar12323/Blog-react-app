import {
  Header,
  Footer,
  Container,
  LoginPage,
  RegisterPage,
} from "./components";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        {/* <RegisterPage /> */}
        <LoginPage />
        <Footer />
      </Container>
    </>
  );
};

export default App;
