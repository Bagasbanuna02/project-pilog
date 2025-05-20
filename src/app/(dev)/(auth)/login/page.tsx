"use client";

import type React from "react";

import { MainColor } from "@/lib/color-palette";
import {
  Button,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconLock, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { apiFetchVersion } from "@/lib/api-fetch-master";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [version, setVersion] = useState("");

  useShallowEffect(() => {
    apiFetchVersion().then((res) => {
      setVersion(res.data);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login - in a real app, you would call an API
    setTimeout(() => {
      setLoading(false);
      router.push("/beranda", { scroll: false });
    }, 1000);
  };

  return (
    <Stack h="100%" justify="center" p={"lg"} style={{ color: "white" }}>
      <Paper radius="md" p="xl" withBorder bg={MainColor.soft_darkblue}>
        <Title order={1} ta="center" mb={30}>
          LOGIN
        </Title>

        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              //   required
              label="Username"
              placeholder="Masukkan username"
              value={username}
              onChange={(event) => setUsername(event.currentTarget.value)}
              leftSection={<IconUser size={16} />}
            />

            <PasswordInput
              //   required
              label="Password"
              placeholder="Masukkan password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              leftSection={<IconLock size={16} />}
            />

            <Button
              fullWidth
              mt="xl"
              type="submit"
              loading={loading}
              radius={"xl"}
            >
              Masuk
            </Button>

            {/* <Text c="dimmed" size="sm" ta="center" mt={5}>
              Belum punya akun?{" "}
              <Anchor size="sm" component="button" onClick={() => {}}>
                Daftar
              </Anchor>
            </Text> */}

            <Text ta={"center"} fz={"xs"} fw={"bold"}>
              {version ? "V." + " " + version : "-"}
            </Text>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
}
