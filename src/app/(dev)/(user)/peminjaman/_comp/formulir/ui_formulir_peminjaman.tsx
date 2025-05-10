
import ComponentContent from "@/components/main/content";
import { Stack, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function UI_FormulirPeminjaman() {
  return (
    <>
      <ComponentContent>
        <Stack p={"lg"}>
          <DateInput
            required
            label="Tanggal Mulai"
            placeholder="Masukan tanggal mulai"
          />
          <DateInput
            required
            label="Tanggal Akhir"
            placeholder="Masukan tanggal akhir"
          />
          <Textarea
            required
            label="Deskripsi"
            placeholder="Masukan alasan peminjaman"
            autosize
            minRows={2}
            maxRows={5}
          />
        </Stack>
      </ComponentContent>
    </>
  );
}
