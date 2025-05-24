import ComponentContent from "@/components/main/content";
import { listDepartemen } from "@/lib/master/list_departemen";
import { Button, Select, Stack, TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function UIAdmin_CreateUser() {
  const router = useRouter();

  const handleSubmit = () => {
    router.back()
  };
  return (
    <>
      <ComponentContent>
        <Stack p={"lg"}>
          <TextInput withAsterisk label="Nama" placeholder="Masukkan nama" />
          <TextInput withAsterisk label="Email" placeholder="Masukkan email" />
          <Select
            withAsterisk
            label="Departemen"
            placeholder="Masukkan departemen"
            data={listDepartemen.map((item) => ({
              value: item.value,
              label: item.title,
            }))}
          />
          <TextInput withAsterisk label="Nomor" placeholder="Masukkan nomor" />
          <TextInput
            withAsterisk
            label="Alamat"
            placeholder="Masukkan alamat"
          />

          <Button radius={"xl"} onClick={handleSubmit}>
            Simpan
          </Button>
        </Stack>
      </ComponentContent>
    </>
  );
}
