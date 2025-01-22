import Container from "./components/Container";
import Footer from "./components/Footer";
import Title from "./components/Title";

function App() {

  return (
    <>
      <Title>

      </Title>

      <Container>
        
      </Container>
      <div className="tasks">
        <br /><br />
        <label className="custom-checkbox">
          <input type="checkbox" name="ex1" id="ex1" />
          <span class="checkmark" />
          <span>Example of Task 1  </span>
          <button id="delete">Delete</button>
        </label>
      </div>

      <Footer>

      </Footer>
    </>
  )
}

export default App
