// src/UserCard.jsx
function UserCard() {
  const user = {
    name: "Поздышев Эдуард",
    position: "Студент ИПТИП",
    avatar: "https://clck.ru/3QRXCp"   // можно поменять число 1–70
  };

  return (
    <div className="user-card">
      <div className="avatar-section">
        <img src={user.avatar} alt={user.name} />
        <p>Онлайн</p>
      </div>

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.position}</p>
        <p>Изучает React.js • 2025</p>
      </div>
    </div>
  );
}

export default UserCard;   // ← ЭТО ОБЯЗАТЕЛЬНО ДОЛЖНО БЫТЬ!