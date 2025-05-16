"use client";

import ComponentHeader from "@/components/main/header";
import { Stack, TextInput } from "@mantine/core";

export default function Page_Search() {
  return (
    <>
      <ComponentHeader title="Pencarian" />
      <Stack p="lg">
        <TextInput placeholder="Cari" radius="xl" />
      </Stack>
    </>
  );
}
