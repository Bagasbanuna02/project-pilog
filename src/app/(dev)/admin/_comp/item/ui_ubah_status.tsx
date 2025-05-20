import ComponentContent from "@/components/main/content";
import { listStatusPeminjaman } from "@/lib/master/list_status_peminjaman";
import { Button, Radio, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function UIAdmin_ItemUbahStatus() {
  const router = useRouter();

  async function handleSubmit() {
    router.back();
  }

  return (
    <>
      <ComponentContent>
        <Stack p={"lg"}>
          <Radio.Group
            name="favoriteFramework"
            label="Ubah status barang"
            withAsterisk
          >
            <Stack mt="xs">
              {listStatusPeminjaman.map((item, index) => (
                <Radio key={index} value={item.value} label={item.label} />
              ))}
            </Stack>
          </Radio.Group>
          <Button radius="xl" onClick={handleSubmit}>
            Simpan
          </Button>
        </Stack>
      </ComponentContent>
    </>
  );
}
