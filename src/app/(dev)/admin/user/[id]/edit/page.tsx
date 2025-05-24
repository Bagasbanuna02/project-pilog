"use client";

import ComponentHeaderAdmin from "@/components/main/header_admin";
import UIAdmin_EditUser from "../../_comp/ui_admin_edit_user";

export default function Page_AdminUserEdit() {
  return (
    <>
      <ComponentHeaderAdmin title="Edit Profile" />
      <UIAdmin_EditUser />
    </>
  );
}
