/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import { listStatusPeminjaman } from "@/lib/master/list_status_peminjaman";
import { PagePath } from "@/lib/page_path";
import { Center, Divider, Paper, Stack, Text, Title } from "@mantine/core";
import { notFound, useParams, useRouter } from "next/navigation";

export default function Page_AdminPeminjaman() {
  const router = useRouter();
  const { status } = useParams();

  const newListMenunggu = dummyItem
    .slice(0, 10)
    .filter((item) => item.status === "tersedia");

  const listDataMenunggu = newListMenunggu.map((item) => ({
    id: item.id,
    name: item.name,
    item: item.name,
  }));

  const newListDitolak = dummyItem
    .slice(0, 10)
    .filter((item) => item.status === "tidak tersedia");

  const listDataDitolak = newListDitolak.map((item) => ({
    id: item.id,
    name: item.name,
    item: item.name,
  }));

  const newListDiterima = dummyItem
    .slice(0, 10)
    .filter((item) => item.status === "perawatan");

  const listDataDiterima = newListDiterima.map((item) => ({
    id: item.id,
    name: item.name,
    item: item.name,
  }));

  const dataStatus = (listData: any) => {
    return listData.map((item: any, index: any) => (
      <Paper
        withBorder
        w={"100%"}
        p={"sm"}
        key={index}
        onClick={() => {
          router.push(PagePath.admin_peminjaman_id({ id: item.id }), {
            scroll: false,
          });
        }}
      >
        <Stack gap={"xs"}>
          <Stack gap={5}>
            <Text fw={"bold"} fz={14}>
              {item.name}
            </Text>
            <Divider />
          </Stack>
          <Center>
            <Title order={3}>{item.item}</Title>
          </Center>
        </Stack>
      </Paper>
    ));
  };

  if (
    !listStatusPeminjaman.map((item) => item.value).includes(status as string)
  ) {
    notFound(); // jika status tidak valid
  }

  return (
    <>
      <ComponentContent>
        <Stack mt={"xs"}>
          {(status === "menunggu" && dataStatus(listDataMenunggu)) ||
            (status === "ditolak" && dataStatus(listDataDitolak)) ||
            (status === "diterima" && dataStatus(listDataDiterima))}
        </Stack>
      </ComponentContent>
    </>
  );
}
