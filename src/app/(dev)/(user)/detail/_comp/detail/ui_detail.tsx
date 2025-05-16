import ComponentContent from "@/components/main/content";
import { AssetImagePath } from "@/lib/assets-image-path";
import { IItem } from "@/lib/interface/i_item";
import { Image, Stack, Title } from "@mantine/core";
import Comp_DetailData from "../../../_comp/comp_detail_data";

export default function UI_Detail({ data }: { data: IItem }) {
  const listData = [
    // {
    //     title: "Kode",
    //     value: data?.id
    // },
    {
      title: "Merk",
      value: data?.category,
    },
    {
      title: "Kategori",
      value: data?.category,
    },
    {
      title: "Kondisi barang",
      value: data?.condition,
    },
    {
      title: "Status",
      value: data?.status,
    },
    {
      title: "Lokasi",
      value: data?.location,
    },
    {
      title: "Deskripsi",
      value: data?.description,
    },
  ];

  return (
    <>
      <ComponentContent>
        <Stack py={"sm"} px={"lg"}>
          <Image
            alt="Foto"
            src={AssetImagePath.dummy_image}
            h={200}
            radius={"sm"}
            style={{
              border: "1px solid #e2e8f0",
            }}
          />

          <Stack>
            <Title order={4} ta="center">
              {data?.name || "-"}
            </Title>

            {listData.map((e, i) => (
              <Comp_DetailData key={i} data={e} />
            ))}
          </Stack>
        </Stack>
      </ComponentContent>
    </>
  );
}
