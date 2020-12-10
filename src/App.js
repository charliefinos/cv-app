import Education from './components/Education'
import General from './components/General'
import Experience from './components/Experience'
import { Card } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Card border="primary">
        <Card.Header><h1>CV - Application</h1></Card.Header>
        <General />
        <Education />
        <Experience />
      </Card>
    </div>
  );
}

export default App;
