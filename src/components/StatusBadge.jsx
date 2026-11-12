function StatusBadge({ isActive }) {

    const statusText = isActive
        ? "Активен" : "Пауза";
    const statusClass = isActive
        ? "status-badge status-active" : "status-badge status-inactive";

    return (
        <span className={statusClass}>
            {statusText}
        </span>
    );
}

export default StatusBadge;