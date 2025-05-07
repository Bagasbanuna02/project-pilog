"use client";
import { dataItem } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import ComponentFooter from "@/components/main/footer";
import ComponentHeader from "@/components/main/header";
import { AssetImagePath } from "@/lib/assets-image-path";
import { Button, Grid, Image, Stack, Title } from "@mantine/core";

export default function DetailPage() {
  const data = dataItem;

  const listData = [
    {
      title: "Kode",
      value: data.code,
    },
    {
      title: "Merk",
      value: data.type,
    },
    {
      title: "Kategori",
      value: data.type,
    },
    {
      title: "Kondisi barang",
      value: data.condition,
    },
    {
      title: "Status",
      value: data.status,
    },
    {
      title: "Lokasi",
      value: data.location,
    },
  ];

  return (
    <>
      <ComponentHeader title="Detail Barang" />
      <ComponentContent>
        <Stack py={"sm"} px={"lg"}>
          <Image
            alt="Foto"
            src={AssetImagePath.dummy_car}
            h={200}
            radius={"sm"}
            style={{
              border: "1px solid #e2e8f0",
            }}
          />

          <Stack>
            <Title order={4} ta="center">
              {data.title}
            </Title>

            {listData.map((e, i) => (
              <Grid key={i}>
                <Grid.Col span={3}>{e.title}</Grid.Col>
                <Grid.Col span={1}>:</Grid.Col>
                <Grid.Col span={"auto"}>{e.value}</Grid.Col>
              </Grid>
            ))}

           
          </Stack>
        </Stack>
      </ComponentContent>
      <ComponentFooter>
        <Button w={"100%"} radius={"xl"} onClick={() => {}}>
          Pinjam
        </Button>
      </ComponentFooter>
    </>
  );
}
