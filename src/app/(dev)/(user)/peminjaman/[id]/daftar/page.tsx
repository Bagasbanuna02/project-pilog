"use client";
import ComponentHeader from "@/components/main/header";
import UI_DaftarPeminjaman from "../../_comp/daftar/ui_daftar_peminjaman";

export default function Page_DaftarPeminjaman() {
  return (
    <>
      <ComponentHeader title="Daftar Peminjaman" />
      <UI_DaftarPeminjaman />
    </>
  );
}
