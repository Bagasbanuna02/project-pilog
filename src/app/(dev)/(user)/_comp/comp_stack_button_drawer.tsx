"use client";

import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

interface ICompStackButtonDrawer {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export default function Comp_StackButtonDrawer({
  path,
  icon,
  title,
}: ICompStackButtonDrawer) {
  const router = useRouter();

  return (
    <Stack align="center" onClick={() => router.push(path, {scroll: false})}>
      <ActionIcon variant="transparent" color={MainColor.black}>
        {icon}
      </ActionIcon>
      <Text ta={"center"} fz={"xs"}>
        {title}
      </Text>
    </Stack>
  );
}
