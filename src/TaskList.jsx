function TaskList() {
    const tasks = [
        { id: 1, title: "Изучить JSX", completed: true },
        { id: 2, title: "Создать первый компонент", completed: true },
        { id: 3, title: "Сделать UserCard", completed: true },
        { id: 4, title: "Сделать список задач", completed: false },
        { id: 5, title: "Сдать практику №19-20", completed: false },
    ];

    return (
        <div className="task-list">
            <h2>Мои задачи по React</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? "completed" : "pending"}>
                        <span>{task.title}</span>
                        {task.completed ? "✅" : "⏳"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;