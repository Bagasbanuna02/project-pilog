"use client";

import ComponentHeaderAdmin from "@/components/main/header_admin";
import UIAdmin_ListUser from "./_comp/ui_list_user";

export default function Page_AdminUserList() {
  return (
    <>
      <ComponentHeaderAdmin title="Daftar User" />
      <UIAdmin_ListUser />
    </>
  );
}
