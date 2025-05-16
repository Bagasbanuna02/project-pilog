/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dummyUser from "@/components/dummy/data_user";
import ComponentContent from "@/components/main/content";
import ComponentHeader from "@/components/main/header";
import { Button, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page_ProfileEdit() {
  const router = useRouter();
  const data = dummyUser;

  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      nama: data.nama,
      email: data.email,
      departemen: data.departemen,
      nomor: data.nomor,
      alamat: data.alamat,
    },
  });



  return (
    <>
      <ComponentHeader title="Edit Profile" />
      <ComponentContent>
        <Stack p="lg">
          <form
            onSubmit={form.onSubmit((values: any) => {  
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                router.back();
              }, 2000);
            })}
          >
            <Stack>
              <TextInput
                {...form.getInputProps("nama")}
                placeholder="Nama"
                label="Nama"
                required
              />
              <TextInput
                {...form.getInputProps("email")}
                placeholder="Email"
                label="Email"
                required
              />
              <Select
                {...form.getInputProps("departemen")}
                placeholder="Departemen"
                label="Departemen"
                required
                data={[
                  { value: "Minku", label: "Minku" },
                  { value: "Scpp", label: "Scpp" },
                  { value: "Bisnis", label: "Bisnis" },
                ]}
              />
              <TextInput
                {...form.getInputProps("nomor")}
                placeholder="Nomor"
                label="Nomor"
                required
              />
              <TextInput
                {...form.getInputProps("alamat")}
                placeholder="Alamat"
                label="Alamat"
                required
              />
              <Button radius="xl" type="submit" loading={loading}>
                Simpan
              </Button>
            </Stack>
          </form>
        </Stack>
      </ComponentContent>
    </>
  );
}
