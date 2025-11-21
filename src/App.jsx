import './App.css';
import TechnologyCard from './components/TechnologyCard';
import './components/TechnologyCard.css';
import ProgressHeader from './components/ProgressHeader';
import './components/ProgressHeader.css';

const technologies = [
  { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' },
  { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' },
  { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' },
];

function App() {
  return (
    <div className="App">
      <h1>Моя дорожная карта по React</h1>

      <ProgressHeader technologies={technologies} />

      {technologies.map(tech => (
        <TechnologyCard
          key={tech.id}
          title={tech.title}
          description={tech.description}
          status={tech.status}
        />
      ))}
    </div>  
  );
}

export default App;