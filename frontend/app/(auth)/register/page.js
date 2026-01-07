// app/(auth)/register/page.jsx
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6 text-center">Register for KDRent</h2>
      <form className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Register Button */}
        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Register
        </button>
      </form>

      {/* Link to Login */}
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
