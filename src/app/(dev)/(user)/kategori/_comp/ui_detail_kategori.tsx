import { availableItems, borrowedItems } from "@/components/dummy/list_data_barang";
import ComponentContent from "@/components/main/content";
import { Badge, Box, Group, Image, Paper, SimpleGrid, Text, TextInput, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function UI_DetailKategori() {
    return (
      <>
        <ComponentContent>
          <TextInput
            rightSection={<IconSearch size={16} />}
            type="search"
            placeholder="Cari kategori"
            p={"md"}
            radius={"xl"}
          />

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