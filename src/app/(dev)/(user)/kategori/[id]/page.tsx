"use client";

import { useParams } from "next/navigation";
import KategoriHeader from "../_comp/header";
import UI_DetailKategori from "../_comp/ui_detail_kategori";

export default function DetailKategori() {
  const param = useParams<{ id: string }>();
  const result = param.id
    .split("-") // ['peralatan', 'elektronik']
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ['Peralatan', 'Elektronik']
    .join(" "); // 'Peralatan Elektronik'

  return (
    <>
      <KategoriHeader title={result} />
      <UI_DetailKategori />
    </>
  );
}
