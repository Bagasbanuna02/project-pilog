"use client";

import ComponentHeaderAdmin from "@/components/main/header_admin";
import UIAdmin_CreateUser from "../_comp/ui_create_user";

export default function Page_AdminUserCreate() {
  return (
    <>
      <ComponentHeaderAdmin title="Tambah User"  />
      <UIAdmin_CreateUser/>
    </>
  );
}
