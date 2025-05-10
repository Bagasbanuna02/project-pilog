// Categories

import ComponentContent from "@/components/main/content";
import { MainColor } from "@/lib/color-palette";
import { PagePath } from "@/lib/page_path";
import { Box, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconCalendarEvent,
  IconCar,
  IconDeviceLaptop,
  IconDoor,
  IconPencil,
  IconTool,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

// Category type
interface Category {
  icon: React.ReactNode;
  label: string;
  value: string;
  path: string;
}

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

  {
    icon: <IconPencil size={24} />,
    label: "Peralatan Kantor",
    value: "peralatan-kantor",
    path: "",
  },

  {
    icon: <IconCalendarEvent size={24} />,
    label: "Peralatan Event",
    value: "peralatan-event",
    path: "",
  },
  {
    icon: <IconTool size={24} />,
    label: "Peralatan Lainnya",
    value: "peralatan-lainnya",
    path: "",
  },
];

export default function UI_Kategori() {
  const router = useRouter();
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
                onClick={() =>
                  router.push(PagePath.kategori_id({ id: category.value }), {
                    scroll: false,
                  })
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
          </SimpleGrid>
        </Box>
      </ComponentContent>
    </>
  );
}
