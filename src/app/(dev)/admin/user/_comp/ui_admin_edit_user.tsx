/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { listdummyUser } from "@/components/dummy/list_data_user";
import ComponentContent from "@/components/main/content";
import { listDepartemen } from "@/lib/master/list_departemen";
import { Button, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import _ from "lodash";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function UIAdmin_EditUser() {
  const { id } = useParams();
  const dataUser = listdummyUser.find((item) => item.id === id);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      nama: dataUser?.name,
      email: dataUser?.email,
      departemen: dataUser?.departemen,
      nomor: dataUser?.nomor,
      alamat: dataUser?.alamat,
    },
  });

  return (
    <>
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
                value={_.lowerCase(form.values.departemen)}
                data={listDepartemen.map((item) => ({
                  value: item.value,
                  label: item.title,
                }))}
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
