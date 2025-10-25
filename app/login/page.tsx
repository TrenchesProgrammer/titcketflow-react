"use client";

import { useState } from "react";
import { login } from "../utils/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const validate = () => {
    const newErrors = { fullname: "", email: "", password: "", confirmPassword: "", general: "" };
    let isValid = true;
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const result = login( email, password);

    if (!result.success) {
      setErrors({ ...errors, general: result.message });
      return;
    }

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="padding-container flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border gap-3 p-3 rounded-2xl w-[500px]"
      >
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
          placeholder="Password"
        />
        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

        {errors.general && (
          <p className="text-red-600 text-sm text-center">{errors.general}</p>
        )}

        <button
          type="submit"
          className="bg-green-400 text-white py-2 rounded-lg hover:bg-green-500"
        >
          Login
        </button>
        <Link href="/signup" className="text-right text-sm text-gray-400">Don't have an account? <span className="text-green-400">Sign up</span></Link>
      </form>
    </div>
  );
};

export default SignupPage;
