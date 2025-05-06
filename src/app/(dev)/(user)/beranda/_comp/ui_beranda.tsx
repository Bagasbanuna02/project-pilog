import {
  availableItems,
  borrowedItems,
} from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import { MainColor } from "@/lib/color-palette";
import {
  Badge,
  Box,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconCar,
  IconCategory,
  IconDeviceLaptop,
  IconDoor,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
// Category type
interface Category {
  icon: React.ReactNode;
  label: string;
  path: string;
}

// Categories
const categories: Category[] = [
  {
    icon: <IconCar size={24} />,
    label: "Transportasi",
    path: "/beranda/transportasi",
  },
  { icon: <IconDoor size={24} />, label: "Ruangan", path: "/beranda/ruangan" },
  {
    icon: <IconDeviceLaptop size={24} />,
    label: "Peralatan Elektronik",
    path: "/beranda/peralatan-elektronik",
  },
  {
    icon: <IconCategory size={24} />,
    label: "Semua Kategori",
    path: "/kategori",
  },
];

export function UI_Beranda() {
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
                onClick={() => router.push(category.path)}
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

        {/* Available Items */}
        <Box mt="md" p="md" bg="white">
          <Title order={4} mb="md">
            Barang Tersedia
          </Title>
          <SimpleGrid cols={2} spacing="md">
            {availableItems.map((item) => (
              <Paper
                key={item.id}
                withBorder
                p={0}
                radius="md"
                style={{ overflow: "hidden" }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  height={120}
                  alt={item.name}
                />
                <Box p="xs">
                  <Text fw={500} size="sm">
                    {item.type}
                  </Text>
                  <Text size="xs" lineClamp={1}>
                    {item.name}
                  </Text>
                </Box>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>

        {/* Borrowed Items */}
        <Box mt="md" p="md" bg="white" pb="xl">
          <Title order={4} mb="md">
            Barang Dipinjam
          </Title>
          <SimpleGrid cols={2} spacing="md">
            {borrowedItems.map((item) => (
              <Paper
                key={item.id}
                withBorder
                p={0}
                radius="md"
                style={{ overflow: "hidden" }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  height={120}
                  alt={item.name}
                />
                <Box p="xs" pos="relative">
                  <Group justify="apart" align="flex-start">
                    <Text fw={500} size="sm">
                      {item.type}
                    </Text>
                    {item.status === "dipinjam" && (
                      <Badge color="orange" variant="filled" size="sm">
                        Dipinjam
                      </Badge>
                    )}
                  </Group>
                  <Text size="xs" lineClamp={1}>
                    {item.name}
                  </Text>
                </Box>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>
      </ComponentContent>
    </>
  );
}
