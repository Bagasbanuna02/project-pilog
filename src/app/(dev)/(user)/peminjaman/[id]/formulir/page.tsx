"use client";
import ComponentHeader from "@/components/main/header";
import FooterFormulir from "../../_comp/formulir/footer_formulir";
import UI_FormulirPeminjaman from "../../_comp/formulir/ui_formulir_peminjaman";


export default function Page_FormulirPeminjaman() {
  return (
    <>
      <ComponentHeader title="Formulir Peminjaman" />
      <UI_FormulirPeminjaman />
      <FooterFormulir />
    </>
  );
}
