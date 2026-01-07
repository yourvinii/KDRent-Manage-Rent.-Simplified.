// app/(auth)/login/page.jsx
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6 text-center">Login to KDRent</h2>
      <form className="space-y-4">
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

        {/* Login Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>

      {/* Link to Register */}
      <p className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}
