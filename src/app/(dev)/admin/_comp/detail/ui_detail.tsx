import Comp_DetailData from "@/app/(dev)/(user)/_comp/comp_detail_data";
import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import { AssetImagePath } from "@/lib/assets-image-path";
import { Image, Stack, Title } from "@mantine/core";
import { useParams } from "next/navigation";

export default function UIAdmin_Item_Detail() {
  const { id } = useParams();

  const filterDataDummy = dummyItem.filter((item) => item.id === id);
  console.log(">", filterDataDummy);
  const listData = [
    {
      title: "Merk",
      value: filterDataDummy[0]?.merk,
    },
    {
      title: "Kategori",
      value: filterDataDummy[0]?.category,
    },
    {
      title: "Kondisi barang",
      value: filterDataDummy[0]?.condition,
    },
    {
      title: "Status",
      value: filterDataDummy[0]?.status,
    },
    {
      title: "Lokasi",
      value: filterDataDummy[0]?.location,
    },
    {
      title: "Deskripsi",
      value: filterDataDummy[0]?.description,
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
              {filterDataDummy[0]?.name || "-"}
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
