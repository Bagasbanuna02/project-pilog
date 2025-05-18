"use client";

import { MainColor } from "@/lib/color-palette";
import { PieChart } from "@mantine/charts";
import {
    Box,
  Center,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCircleChevronRightFilled, IconCircleFilled } from "@tabler/icons-react";
import Comp_BoxItem from "../../(user)/_comp/box_item";
import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";

export default function UIAdmin_Dashboard() {
  const listDataStatus = [
    {
      title: "Tersedia",
      value: 23,
      color: "green",
    },
    {
      title: "Dipinjam",
      value: 7,
      color: "orange",
    },
    {
      title: "Perawatan",
      value: 10,
      color: "gray",
    },
  ];

  const dataChart = [
    { name: "Transportasi", value: 5, color: "#b32f25" },
    { name: "Elektronik", value: 7, color: "#f59e0b" },
    { name: "Peralatan Kantor", value: 10, color: "#3b82f6" },
    { name: "Peralatan Event", value: 3, color: "#4ade80" },
    { name: "Peralatan Lainnya", value: 2, color: "#f43f5e" },
    { name: "Ruangan", value: 3, color: "#8b5cf6" },
  ];

  const dataDummy = dummyItem
    .slice(0, 5)
    .filter((item) => item.status === "tersedia");

  return (
    <>
      <ComponentContent>
        <Stack p="lg" gap={"xl"}>
          <SimpleGrid cols={3}>
            {listDataStatus.map((item, index) => (
              <Paper
                key={index}
                bg={item.color}
                p={2}
                radius="md"
                c={MainColor.black}
              >
                <Stack
                  align="center"
                  gap={"xs"}
                  style={{
                    border: "2px solid #ccc",
                    borderRadius: 6,
                    padding: 10,
                  }}
                >
                  <Title order={1}>{item.value}</Title>
                  <Text>{item.title}</Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>

          <Stack gap={"sm"}>
            <Paper withBorder p="xs">
              <Title order={4}>Kategori</Title>
              <Center p={"sm"}>
                <PieChart
                  size={250}
                  withLabelsLine
                  labelsPosition="inside"
                  labelsType="value"
                  withLabels
                  strokeColor="black"
                  strokeWidth={1}
                  data={dataChart}
                  styles={{
                    tooltip: {
                      border: `1px solid ${MainColor.red}`,
                    },
                  }}
                />
              </Center>

              <Stack gap={"xs"}>
                {dataChart.map((item, index) => (
                  <Paper key={index}>
                    <Group>
                      <IconCircleFilled size={20} color={item.color} />
                      <Text fz={"xs"}>{item.name}</Text>
                    </Group>
                  </Paper>
                ))}
              </Stack>
            </Paper>
          </Stack>

          <Stack>
            <Paper withBorder p="sm">
              <Stack gap={"xs"}>
                <Title order={4}>Paling sering dipinjam</Title>
                {dataDummy.map((item, index) => (
                  <Comp_BoxItem key={index} data={item} />
                ))}

                <Box style={{ flex: 1, display: "flex", justifyContent: "flex-end", gap: 5 }}>
                  <Text>Lihat semua </Text>
                  <IconCircleChevronRightFilled/>
                </Box>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </ComponentContent>
    </>
  );
}
