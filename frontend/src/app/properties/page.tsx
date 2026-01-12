"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Properties() {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    api.get("/property").then(res => setProperties(res.data.properties));
  }, []);

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="p-6">
        <PageHeader title="Properties" subtitle="All listed properties" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map(p => (
            <Link key={p._id} href={`/properties/${p._id}`}>
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {p.city}, {p.country}
                  </p>
                  <p className="mt-2 font-medium">
                    ₹{p.monthlyRent}/month
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
