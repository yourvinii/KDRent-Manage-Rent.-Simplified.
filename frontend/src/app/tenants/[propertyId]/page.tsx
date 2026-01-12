"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import CreatePropertyDialog from "@/components/CreatePropertyDialog";

export default function Properties() {
  const [properties, setProperties] = useState<any[]>([]);

  const fetchProperties = async () => {
    const res = await api.get("/property");
    setProperties(res.data.properties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <PageHeader
            title="Properties"
            subtitle="Manage your rental properties"
          />
          <CreatePropertyDialog onSuccess={fetchProperties} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map(p => (
            <Link key={p._id} href={`/properties/${p._id}`}>
              <Card className="hover:shadow-md transition">
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
