"use client";

import ComponentContent from "@/components/main/content";
import ComponentHeader from "@/components/main/header";
import { Stack, Text } from "@mantine/core";

export default function Page_Riwayat() {
    return (
        <>
            <ComponentHeader title="Riwayat Peminjaman" />
            <ComponentContent>
                <Stack p="lg">
                    <Text ta="center" fz="md" c="gray">Belum ada riwayat peminjaman</Text>
                </Stack>
            </ComponentContent>
        </>
    )
}
