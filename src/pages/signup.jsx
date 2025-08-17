import { useState } from "react";

export default function SignUp({ onSignup }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid Email required";
    if (formData.password.length < 6)
      newErrors.password = "Password must be 6+ chars";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      onSignup({ username: formData.fullName, email: formData.email });
      setFormData({ fullName: "", email: "", password: "" });
    }
  };

  return (
  <div className="flex items-center justify-center min-h-screen p-4">
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl mb-4 text-center font-extrabold text-emerald-600">
        Sign Up
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 border rounded mb-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      {errors.fullName && (
        <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded mb-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 border rounded mb-4 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>
      )}

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white p-3 rounded hover:bg-emerald-600 transition"
      >
        Sign Up
      </button>
    </form>
  </div>
);
}
