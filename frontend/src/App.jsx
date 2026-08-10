import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Volunteers from "./pages/Volunteers";
import Beneficiaries from "./pages/Beneficiaries";
import Events from "./pages/Events";
import Donations from "./pages/Donations";
import Tasks from "./pages/Tasks";

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public pages */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard pages */}
        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/volunteers"
            element={<Volunteers />}
          />

          <Route
            path="/beneficiaries"
            element={<Beneficiaries />}
          />

          <Route
            path="/events"
            element={<Events />}
          />

          <Route
            path="/donations"
            element={<Donations />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;