"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import api from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    api.get("/owner/dashboard").then(res => setData(res.data));
  }, []);

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="p-6">
        <PageHeader
          title={`Welcome, ${data?.owner?.name || ""}`}
          subtitle="Owner dashboard overview"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                Total Properties
              </p>
              <p className="text-3xl font-bold">
                {data?.totalProperties ?? 0}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedRoute>
  );
}
