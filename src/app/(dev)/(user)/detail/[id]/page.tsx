"use client";
import ComponentFooter from "@/components/main/footer";
import ComponentHeader from "@/components/main/header";
import { Button } from "@mantine/core";
import UI_Detail from "../_comp/ui_detail";
import { dummyItem } from "@/components/dummy/list_data_barang";
import { IItem } from "@/lib/interface/i_item";
import { useShallowEffect } from "@mantine/hooks";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function DetailPage() {
  const param = useParams<{ id: string }>();
  const [data, setData] = useState<IItem>();

  useShallowEffect(() => {
    handlerFilterData();
  }, []);

  async function handlerFilterData() {
    const response = dummyItem.find((item) => item.id === param.id);
    setData(response);
  }

  return (
    <>
      <ComponentHeader title="Detail Barang" />
      <UI_Detail data={data as IItem} />
      <ComponentFooter>
        <Button w={"100%"}
          color={data?.status === "tersedia" ? "blue" : data?.status === "tidak tersedia" ? "orange" : "gray"}
          radius={"xl"} onClick={() => { }}>
          {data?.status === "tersedia" && "Pinjam"}
          {data?.status === "tidak tersedia" && "Dipinjam"}
          {data?.status === "perawatan" && "Dalam perawatan"}
        </Button>
      </ComponentFooter>
    </>
  );
}
