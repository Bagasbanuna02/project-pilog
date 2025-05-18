"use client";

import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Grid,
  Paper,
  ScrollArea,
  Stack,
  Table,
  TextInput,
} from "@mantine/core";
import {
  IconEye,
  IconSearch,
  IconSquareRoundedPlus,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { PagePath } from "@/lib/page_path";

export default function UIAdmin_Item() {
  const router = useRouter();

  const rows = dummyItem.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Button
          radius={"xl"}
          variant="outline"
          leftSection={<IconEye />}
          onClick={() => {}}
        >
          Detail
        </Button>
      </Table.Td>
      <Table.Td w={200}>{item.name}</Table.Td>
      <Table.Td w={200}>{item.category}</Table.Td>
      <Table.Td w={200}>
        {item.status == "tersedia" ? (
          <Badge color="green">Tersedia</Badge>
        ) : item.status == "tidak tersedia" ? (
          <Badge color="red">Dipinjam</Badge>
        ) : item.status == "perawatan" ? (
          <Badge color="orange">Perawatan</Badge>
        ) : (
          ""
        )}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <ComponentContent>
        <Stack p={"xs"} mb={"md"}>
          <Grid
            align="center"
            justify="center"
            h={"100%"}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid.Col span={"auto"}>
              <TextInput
                placeholder="Cari"
                leftSection={<IconSearch />}
                radius={"xl"}
              />
            </Grid.Col>
            <Grid.Col span={"content"}>
              <ActionIcon
                variant="transparent"
                size={40}
                onClick={() => router.push(PagePath.admin_item_create, {scroll: false})}
              >
                <IconSquareRoundedPlus size={30} />
              </ActionIcon>
            </Grid.Col>
          </Grid>
          <Paper withBorder p={"xs"} w={"100%"}>
            <ScrollArea w={"100%"} h={"100%"}>
              <Box w={700}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th ta={"center"}>Aksi</Table.Th>
                      <Table.Th>Nama</Table.Th>
                      <Table.Th>Kategori</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </Box>
            </ScrollArea>
          </Paper>
        </Stack>
      </ComponentContent>
    </>
  );
}
