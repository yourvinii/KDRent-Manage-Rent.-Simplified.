"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/lib/auth";
import { Home, Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-3">
      <div className="flex gap-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Home size={18} /> Dashboard
        </Link>
        <Link href="/properties" className="flex items-center gap-2">
          <Building2 size={18} /> Properties
        </Link>
      </div>
      <Button variant="outline" onClick={logoutUser}>
        Logout
      </Button>
    </nav>
  );
}
