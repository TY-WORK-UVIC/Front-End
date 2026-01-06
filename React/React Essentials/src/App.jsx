import reactImg from './assets/react-core-concepts.png';
import Header from './componets/Header/Header.jsx';
import CoreConcepts from './componets/CoreConcepts.jsx';
import Example from './componets/Example.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Example />
      </main>
    </>
  );
}

export default App;
