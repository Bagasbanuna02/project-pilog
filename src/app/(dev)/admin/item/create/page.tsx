"use client";

import ComponentHeaderAdmin from "@/components/main/header_admin";
import UIAdmin_ItemCreate from "../../_comp/item/ui_create_item";

export default function Page_AdminItemCreate() {
  return (
    <>
      <ComponentHeaderAdmin title="Tambah Barang" />
      <UIAdmin_ItemCreate />
    </>
  );
}
