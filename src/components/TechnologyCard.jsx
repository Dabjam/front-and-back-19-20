function TechnologyCard({ title, description, status }) {
  return (
    <div className={`tech-card status-${status}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      
      <div className="status-indicator">
        {status === 'completed' && '✅ Изучено'}
        {status === 'in-progress' && '⏳ В процессе'}
        {status === 'not-started' && '⛔ Не начато'}
      </div>
    </div>
  );
}

export default TechnologyCard;