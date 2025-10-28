"use client";

import { useState } from "react";
import { signup } from "../utils/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { showNotification } from "@mantine/notifications";

const SignupPage = () => {
  const router = useRouter();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ fullname: "", email: "", password: "", confirmPassword: "", general: "" });

  const validate = () => {
    const newErrors = { fullname: "", email: "", password: "", confirmPassword: "", general: "" };
    let isValid = true;

    if (!fullname) {
      newErrors.fullname = "Full name is required";
      isValid = false;
    }
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
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const result = signup(fullname, email, password);

    if (!result.success) {
      setErrors({ ...errors, general: result.message });
      showNotification({
        title: "Signup Failed",
        message: result.message,
        color: "red",
      });
      return;
    }

    showNotification({
      title: "Signup Successful",
      message: "Your account has been created successfully.",
      color: "green",
    });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            And start managing your tickets with ease
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 shadow-md rounded-lg">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="fullname" className="sr-only">Full name</label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  setErrors({ ...errors, fullname: "" });
                }}
              />
              {errors.fullname && <p className="text-red-600 text-xs pt-1">{errors.fullname}</p>}
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && <p className="text-red-600 text-xs pt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
              />
              {errors.password && <p className="text-red-600 text-xs pt-1">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrors({ ...errors, confirmPassword: "" });
                }}
              />
              {errors.confirmPassword && <p className="text-red-600 text-xs pt-1">{errors.confirmPassword}</p>}
            </div>
          </div>

          {errors.general && (
            <p className="text-red-600 text-sm text-center">{errors.general}</p>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign up
            </button>
          </div>
          <p className="text-center text-sm">
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Already have an account? Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
