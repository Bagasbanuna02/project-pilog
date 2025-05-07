
import ComponentContent from "@/components/main/content";
import { IItem } from "@/lib/interface/i_item";
import {
  Box,
  SimpleGrid,
  TextInput
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Comp_BoxItem from "../../_comp/box_item";

export default function UI_DetailKategori({ data }: { data: IItem[] }) {
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
          {/* <Title order={4} mb="md">
            Barang Tersedia
          </Title> */}
          <SimpleGrid cols={2} spacing="md">
            {data.map((item, i) => (
              <Comp_BoxItem data={item} key={i} />
            ))}
          </SimpleGrid>
        </Box>


      </ComponentContent>
    </>
  );
}
