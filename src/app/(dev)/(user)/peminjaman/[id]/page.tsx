
"use client";

import { listUserPeminjaman } from "@/components/dummy/list_peminjaman_user";
import ComponentContent from "@/components/main/content";
import ComponentHeader from "@/components/main/header";
import { IDetailPeminjaman } from "@/lib/interface/i_item";
import { Badge, Grid, Stack } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page_Peminjaman() {
  const param = useParams<{ id: string }>();
  const [data, setData] = useState<IDetailPeminjaman>();

  useShallowEffect(() => {
    hanldeUser();
  }, [param.id]);

  async function hanldeUser() {
    const response =
      listUserPeminjaman.find((item) => item.id === param.id) || null;
    setData({
      nama: response?.nama || "",
      barang: response?.barang || "",
      status: response?.status || "",
      mulai: response?.mulai || "",
      berakhir: response?.berakhir || "",
      deskripsi: response?.deskripsi || "",
      foto: response?.foto || "",
    });
  }

  const listData = [
    {
      title: "Nama",
      value: data?.nama || "",
    },
    {
      title: "Barang",
      value: data?.barang || "",
    },
    {
      title: "Status",
      value: data?.status === "Dipinjam" ? <Badge color="orange" variant="filled" size="sm">Dipinjam</Badge> : <Badge color="green" variant="filled" size="sm">Selesai</Badge>,
    },
    {
      title: "Mulai",
      value: data?.mulai || "",
    },
    {
      title: "Berakhir",
      value: data?.berakhir || "",
    },
    {
      title: "Deskripsi",
      value: data?.deskripsi || "",
    },
  ];

  return (
    <>
      <ComponentHeader title="Detail Peminjaman" />
      <ComponentContent>
        <Stack p={"lg"}>
          {listData.map((e, i) => (
            <Grid key={i}>
              <Grid.Col span={3}>{e.title}</Grid.Col>
              <Grid.Col span={1}>:</Grid.Col>
              <Grid.Col span={"auto"}>{e.value}</Grid.Col>
            </Grid>
          ))}
        </Stack>
      </ComponentContent>
    </>
  );
}
