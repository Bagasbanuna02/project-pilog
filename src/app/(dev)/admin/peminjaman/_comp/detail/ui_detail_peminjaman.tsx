import Comp_DetailData from "@/app/(dev)/(user)/_comp/comp_detail_data";
import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import { AssetImagePath } from "@/lib/assets-image-path";
import { MainColor } from "@/lib/color-palette";
import { Button, Group, Image, Stack, Title } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { useParams } from "next/navigation";
import { IItem } from "@/lib/interface/i_item";
import { PagePath } from "@/lib/page_path";
import { useRouter } from "next/navigation";

export default function UIAdmin_DetailPeminjaman() {
  const router = useRouter();
  const [data, setData] = useState<IItem>();
  const param = useParams<{ id: string }>();

  useShallowEffect(() => {
    handlerFilterData();
  }, []);

  async function handlerFilterData() {
    const response = dummyItem.find((item) => item.id === param.id);
    setData(response);
  }

  const listData = [
    {
      title: "Peminjam",
      value: "Lukito Prima Aidin",
    },
    {
      title: "Tanggal Mulai",
      value: "22 Mei 2025",
    },
    {
      title: "Tanggal Selesai",
      value: "22 Mei 2025",
    },
    {
      title: "Deskripsi",
      value:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
              {data?.name}
            </Title>

            {listData.map((e, i) => (
              <Comp_DetailData key={i} data={e} />
            ))}
          </Stack>

          {data?.status === "tersedia" && (
            <Group mt={"xl"} grow justify="space-between">
              <Button
                radius={"xl"}
                color={MainColor.red}
                onClick={() => {
                  router.replace(
                    PagePath.admin_peminjaman_list({ status: "ditolak" }),
                    {
                      scroll: false,
                    }
                  );
                }}
              >
                Tolak
              </Button>
              <Button
                radius={"xl"}
                color={MainColor.green}
                onClick={() => {
                  router.replace(
                    PagePath.admin_peminjaman_list({ status: "diterima" }),
                    {
                      scroll: false,
                    }
                  );
                }}
              >
                Setujui
              </Button>
            </Group>
          )}
        </Stack>
      </ComponentContent>
    </>
  );
}
