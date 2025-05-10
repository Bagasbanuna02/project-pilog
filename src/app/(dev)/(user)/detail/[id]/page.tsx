"use client";

import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentFooter from "@/components/main/footer";
import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { IItem } from "@/lib/interface/i_item";
import { PagePath } from "@/lib/page_path";
import { ActionIcon, Button, SimpleGrid, Stack, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { IconDotsVertical, IconList } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import ComponentDrawer from "../../_comp/comp_drawer";
import UI_Detail from "../_comp/detail/ui_detail";

export default function DetailPage() {
  const param = useParams<{ id: string }>();
  const [data, setData] = useState<IItem>();
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  useShallowEffect(() => {
    handlerFilterData();
  }, []);

  async function handlerFilterData() {
    const response = dummyItem.find((item) => item.id === param.id);
    setData(response);
  }


  return (
    <>
      <ComponentHeader
        title="Detail Barang"
        buttonRight={
          <ActionIcon variant="transparent" onClick={() => setOpened(true)}>
            <IconDotsVertical color="white" />
          </ActionIcon>
        }
      />
      <UI_Detail data={data as IItem} />
      <ComponentFooter>
        <Button
          w={"100%"}
          color={
            data?.status === "tersedia"
              ? "blue"
              : data?.status === "tidak tersedia"
              ? "orange"
              : "gray"
          }
          radius={"xl"}
          onClick={() =>
            data?.status === "tersedia" &&
            router.push(PagePath.formulir_peminjaman({ id: param.id }), {
              scroll: false,
            })
          }
        >
          {data?.status === "tersedia" && "Pinjam"}
          {data?.status === "tidak tersedia" && "Dipinjam"}
          {data?.status === "perawatan" && "Dalam perawatan"}
        </Button>
      </ComponentFooter>

      <ComponentDrawer opened={opened} onClose={() => setOpened(false)}>
        <SimpleGrid cols={3}>
          <Stack
            align="center"
            onClick={() =>
              router.push(PagePath.daftar_peminjaman({ id: param.id }), {
                scroll: false,
              })
            }
          >
            <ActionIcon variant="transparent" color={MainColor.black}>
              <IconList />
            </ActionIcon>
            <Text ta={"center"} fz={"xs"}>
              Daftar Peminjam
            </Text>
          </Stack>
        </SimpleGrid>
      </ComponentDrawer>
    </>
  );
}
