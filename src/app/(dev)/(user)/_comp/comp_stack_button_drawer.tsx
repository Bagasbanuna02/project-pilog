"use client";

import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

interface ICompStackButtonDrawer {
  path: string;
  icon: React.ReactNode;
  title: string;
  color?: string;
  // routerMethod?: "push" | "replace";
}

export default function Comp_StackButtonDrawer({
  path,
  icon,
  title,
  color,
}: // routerMethod = "push",
ICompStackButtonDrawer) {
  const router = useRouter();

  return (
    <Stack
      align="center"
      onClick={() => router.push(path, { scroll: false })}
      style={{
        cursor: "pointer",
      }}
    >
      <ActionIcon variant="transparent" color={color ?? MainColor.black}>
        {icon}
      </ActionIcon>
      <Text ta={"center"} fz={"xs"} c={color ?? MainColor.black}>
        {title}
      </Text>
    </Stack>
  );
}
