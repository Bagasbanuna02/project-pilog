/* eslint-disable @typescript-eslint/no-unused-vars */
import ComponentContent from "@/components/main/content";
import { Stack, Textarea } from "@mantine/core";
import { DateInput, DatePicker } from "@mantine/dates";
import { useState } from "react";

export default function UI_FormulirPeminjaman() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <ComponentContent>
        <Stack p={"lg"}>
          {/* <DatePicker value={value} onChange={setValue} /> */}
          <DateInput
            required
            label="Tanggal Mulai"
            placeholder="Masukan tanggal mulai"
            clearable
          />
          <DateInput
            required
            label="Tanggal Akhir"
            placeholder="Masukan tanggal akhir"
            clearable
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
