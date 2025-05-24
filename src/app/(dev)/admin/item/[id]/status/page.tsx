"use client"

import ComponentHeaderAdmin from "@/components/main/header_admin";
import UIAdmin_ItemUbahStatus from "../../../_comp/item/ui_ubah_status";

export default function Page_AdminItemStatus() {
  return (
    <>
      <ComponentHeaderAdmin title="Ubah Status" />
      <UIAdmin_ItemUbahStatus />
    </>
  );
}
