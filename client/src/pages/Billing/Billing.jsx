import "./Billing.css";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function Billing() {
  const [bills, setBills] = useState([
    {
      id: 1,
      patient: "Rahul Kumar",
      treatment: "Heart Checkup",
      amount: 5000,
      status: "Paid",
    },
    {
      id: 2,
      patient: "Priya Singh",
      treatment: "MRI Scan",
      amount: 8000,
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    patient: "",
    treatment: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!form.patient || !form.treatment || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    setBills([
      ...bills,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      patient: "",
      treatment: "",
      amount: "",
      status: "Pending",
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this bill?")) {
      setBills(bills.filter((bill) => bill.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="billing-page">

        <h1>Billing</h1>

        <div className="billing-form">

          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            value={form.patient}
            onChange={handleChange}
          />

          <input
            type="text"
            name="treatment"
            placeholder="Treatment"
            value={form.treatment}
            onChange={handleChange}
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>Paid</option>
          </select>

          <button onClick={handleAdd}>
            <FaPlus /> Add Bill
          </button>

        </div>

        <table className="billing-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.patient}</td>
                <td>{bill.treatment}</td>
                <td>₹ {bill.amount}</td>
                <td>{bill.status}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(bill.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </DashboardLayout>
  );
}