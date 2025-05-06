"use client";

import type React from "react";

import { Box, Button, Container, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconBriefcase,
  IconBuildingWarehouse,
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

export default function Kategori() {
  const router = useRouter()
  // All categories
  const categories: Category[] = [
    { icon: <IconCar size={24} />, label: "Transportasi" , path: "/beranda/transportasi"},
    { icon: <IconDoor size={24} />, label: "Ruangan" , path: "/beranda/ruangan"},
    { icon: <IconDeviceLaptop size={24} />, label: "Peralatan Elektronik" , path: "/beranda/peralatan-elektronik"},
    { icon: <IconCategory size={24} />, label: "Semua Kategori" , path: "/beranda/semua-kategori"},
    { icon: <IconBriefcase size={24} />, label: "Peralatan Kantor" , path: "/beranda/peralatan-kantor"},
    { icon: <IconBuildingWarehouse size={24} />, label: "Gudang" , path: "/beranda/gudang"},
  ];

  return (
    <Container p={0} fluid>
      {/* Categories Grid */}
      <Box p="md" bg="white">
        <SimpleGrid cols={3}>
          {categories.map((category, index) => (
            <Stack key={index} align="center" gap={5} mb="lg" component={Button} onClick={() => router.push(category.path)}>
              <Paper
                radius="xl"
                p="md"
                bg="#4dabf7"
                style={{
                  width: 70,
                  height: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {category.icon}
              </Paper>
              <Text
                size="sm"
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
    </Container>
  );
}
