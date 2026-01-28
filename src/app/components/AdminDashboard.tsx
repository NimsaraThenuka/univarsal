import axios from "axios";
import { useState } from "react";

export default function AdminDashboard() {
  const [form, setForm] = useState<any>({});

  const submit = async () => {
    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));

    await axios.post("http://localhost:5000/api/products", data, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input type="file" onChange={(e) => setForm({ ...form, image: e.target.files![0] })} />
      <button onClick={submit}>Add Product</button>
    </div>
  );
}
