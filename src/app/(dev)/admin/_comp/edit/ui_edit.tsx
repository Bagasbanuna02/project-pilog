/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ComponentContent from "@/components/main/content";
import { PagePath } from "@/lib/page_path";
import { Button, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";


export default function UIAdmin_ItemEdit() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: "",
      category: "",
      brand: "",
      location: "",
      description: "",
    },
  });

  async function handleSubmit(values: any) {
    router.replace(PagePath.admin_item, { scroll: false });
  }

  return (
    <>
      <ComponentContent>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack p={"lg"}>
            <TextInput
              withAsterisk
              placeholder="Nama Barang"
              label="Nama Barang"
              //   required
              {...form.getInputProps("name")}
            />
            <Select
              withAsterisk
              placeholder="Kategori"
              label="Kategori"
              //   required
              data={[
                { value: "transportasi", label: "Transportasi" },
                { value: "elektronik", label: "Elektronik" },
                { value: "peralatan_kantor", label: "Peralatan Kantor" },
                { value: "peralatan_event", label: "Peralatan Event" },
                { value: "peralatan_lainnya", label: "Peralatan Lainnya" },
                { value: "ruangan", label: "Ruangan" },
              ]}
            />
            <TextInput
              withAsterisk
              placeholder="Merk"
              label="Merk"
              //   required
              {...form.getInputProps("brand")}
            />
            <TextInput
              withAsterisk
              placeholder="Lokasi"
              label="Lokasi"
              //   required
              {...form.getInputProps("location")}
            />
            <TextInput
              withAsterisk
              placeholder="Deskripsi"
              label="Deskripsi"
              //   required
              {...form.getInputProps("description")}
            />
            <Button radius="xl" type="submit">
              Update
            </Button>
          </Stack>
        </form>
      </ComponentContent>
    </>
  );
}
