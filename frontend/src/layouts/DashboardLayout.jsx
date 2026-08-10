import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <nav>
        <h2>NGO Platform</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/volunteers">Volunteers</Link>
        <Link to="/beneficiaries">Beneficiaries</Link>
        <Link to="/events">Events</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;