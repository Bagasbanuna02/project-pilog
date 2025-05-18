"use client";

import ComponentHeader from "@/components/main/header";
import UIAdmin_ItemCreate from "../../_comp/item/ui_create_item";

export default function Page_AdminItemCreate() {
  return (
    <>
      <ComponentHeader title="Tambah Barang" />
      <UIAdmin_ItemCreate />
    </>
  );
}
