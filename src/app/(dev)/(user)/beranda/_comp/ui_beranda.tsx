import {
  dummyItem
} from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import { MainColor } from "@/lib/color-palette";
import {
  Box,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title
} from "@mantine/core";
import {
  IconCar,
  IconCategory,
  IconDeviceLaptop,
  IconDoor,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Comp_BoxItem from "../../_comp/box_item";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { IItem } from "@/lib/interface/i_item";
import { PagePath } from "@/lib/page_path";
// Category type
interface Category {
  icon: React.ReactNode;
  label: string;
  value: string;
  path: string;
}

// Categories
const categories: Category[] = [
  {
    icon: <IconCar size={24} />,
    label: "Transportasi",
    value: "transportasi",
    path: "",
  },
  {
    icon: <IconDoor size={24} />,
    label: "Ruangan",
    value: "ruangan",
    path: "",
  },
  {
    icon: <IconDeviceLaptop size={24} />,
    label: "Peralatan Elektronik",
    value: "peralatan-elektronik",
    path: "",
  },
];



export function UI_Beranda() {
  const router = useRouter();

  const [data, setData] = useState<IItem[]>([]);

  useShallowEffect(() => {
    handleSortData()
  }, [data])

  async function handleSortData() {
    const statusOrder = {
      "tersedia": 0,
      "tidak tersedia": 1,
      "perawatan": 2
    };

    const sortedData = dummyItem.sort((a, b) => {
      return statusOrder[a.status] - statusOrder[b.status];
    });

    setData(sortedData);

  }

  const tersediaItems = data.filter(item => item.status === "tersedia").slice(-4);
  const tidakTersediaItems = data.filter(item => item.status === "tidak tersedia").slice(-4);
  const perawatanItems = data.filter(item => item.status === "perawatan").slice(-4);


  return (
    <>
      <ComponentContent>
        <Box p="md" bg="white">
          <SimpleGrid cols={4}>
            {categories.map((category, index) => (
              <Stack
                key={index}
                align="center"
                gap={5}
                onClick={() => router.push(PagePath.kategori_id({ id: category.value }), {scroll: false})
                }
              >
                <Paper
                  radius="xl"
                  p="md"
                  bg={MainColor.darkblue}
                  style={{
                    width: 60,
                    height: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: MainColor.white,
                  }}
                >
                  {category.icon}
                </Paper>
                <Text
                  size="xs"
                  ta="center"
                  style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {category.label}
                </Text>
              </Stack>
            ))}
            <Stack
              align="center"
              gap={5}
              onClick={() => router.push(PagePath.kategori, {scroll: false})}
            >
              <Paper
                radius="xl"
                p="md"
                bg={MainColor.darkblue}
                style={{
                  width: 60,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: MainColor.white,
                }}
              >
                <IconCategory size={24} />
              </Paper>
              <Text
                size="xs"
                ta="center"
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Semua Kategori
              </Text>
            </Stack>
          </SimpleGrid>
        </Box>

        {/* Available Items */}
        <Box mt="md" p="md" bg="white">
          <Title order={4} mb="md">
            Barang Tersedia
          </Title>
          <SimpleGrid cols={2} spacing="md">
            {tersediaItems.map((item, index) => (
              <Comp_BoxItem key={index} data={item} />
            ))}
          </SimpleGrid>
        </Box>

        {/* Tidak Tersedia Items */}
        <Box mt="md" p="md" bg="white">
          <Title order={4} mb="md">
            Barang Tidak Tersedia
          </Title>
          <SimpleGrid cols={2} spacing="md">
            {tidakTersediaItems.map((item, index) => (
              <Comp_BoxItem key={index} data={item} />
            ))}
          </SimpleGrid>
        </Box>

        {/* Perawatan Items */}
        <Box mt="md" p="md" bg="white">
          <Title order={4} mb="md">
            Barang Perawatan
          </Title>
          <SimpleGrid cols={2} spacing="md">
            {perawatanItems.map((item, index) => (
              <Comp_BoxItem key={index} data={item} />
            ))}
          </SimpleGrid>
        </Box>
      </ComponentContent>
    </>
  );
}
