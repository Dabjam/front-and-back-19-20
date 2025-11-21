function ProgressHeader({ technologies }) {
  const completed = technologies.filter(t => t.status === 'completed').length;
  const total = technologies.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-header">
      <div className="stats">
        <p>Всего технологий: <strong>{total}</strong></p>
        <p>Изучено: <strong>{completed}</strong></p>
        <p>Прогресс: <strong>{percent}%</strong></p>
      </div>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressHeader;   // ← ЭТО ОБЯЗАТЕЛЬНО!