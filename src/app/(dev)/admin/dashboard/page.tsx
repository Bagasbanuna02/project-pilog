"use client";


import HeaderDashboard from "../_comp/header_dashboard";
import UI_Dashboard from "../_comp/ui_dashboard";

export default function AdminPage() {
  return (
    <>
      {/* Header */}
      <HeaderDashboard />

      {/* Categories */}
      <UI_Dashboard />
    </>
  );
}