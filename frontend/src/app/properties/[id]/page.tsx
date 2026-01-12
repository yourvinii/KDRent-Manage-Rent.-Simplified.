"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    api.get(`/property/${id}`).then(res => setProperty(res.data.property));
  }, []);

  if (!property) return null;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <PageHeader title={property.title} />
        <p>{property.address}</p>
        <p>{property.city}, {property.country}</p>
        <p className="font-semibold mt-2">
          ₹{property.monthlyRent}/month
        </p>
      </div>
    </>
  );
}
