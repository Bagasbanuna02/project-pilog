"use client";

import { useParams } from "next/navigation";
import KategoriHeader from "../_comp/header";
import UI_DetailKategori from "../_comp/ui_detail_kategori";
import { dummyItem } from "@/components/dummy/list_data_barang";
import { IItem } from "@/lib/interface/i_item";

export default function DetailKategori() {
  const param = useParams<{ id: string }>();
  const namaPage = param.id
    .split("-") // ['peralatan', 'elektronik']
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // ['Peralatan', 'Elektronik']
    .join(" "); // 'Peralatan Elektronik'

  const namaFilterKategori = param.id
    .replace(/-/g, ' ')
    .toLowerCase()
    .replace(/^./, (c) => c.toUpperCase());

  const dataDummy: IItem[] = dummyItem

  function filterByCategory(category: string) {
    return dataDummy.filter(item => item.category === category);
  }

  const hasil = filterByCategory(namaFilterKategori);

  return (
    <>
      <KategoriHeader title={namaPage} />
      <UI_DetailKategori data={hasil} />
    </>
  );
}
