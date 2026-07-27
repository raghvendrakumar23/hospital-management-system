import "./Analytics.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", appointments: 20 },
  { day: "Tue", appointments: 35 },
  { day: "Wed", appointments: 28 },
  { day: "Thu", appointments: 40 },
  { day: "Fri", appointments: 50 },
  { day: "Sat", appointments: 38 },
  { day: "Sun", appointments: 30 },
];

export default function Analytics() {
  return (
    <div className="analytics-grid">

      <div className="chart-card">
        <h3>Weekly Appointments</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="day" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="appointments"
              stroke="#38bdf8"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      <div className="recent-card">

        <h3>Recent Appointments</h3>

        <table>

          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Aman</td>
              <td>Dr. Sharma</td>
              <td><span className="done">Done</span></td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>Dr. Verma</td>
              <td><span className="pending">Pending</span></td>
            </tr>

            <tr>
              <td>Rahul</td>
              <td>Dr. Singh</td>
              <td><span className="done">Done</span></td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}