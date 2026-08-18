import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>NGO Platform</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/volunteers">Volunteers</Link>
        <Link to="/beneficiaries">Beneficiaries</Link>
        <Link to="/events">Events</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;