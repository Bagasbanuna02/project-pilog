"use client";

import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Stack, Text } from "@mantine/core";

interface ICompDrawerToModalShow {
  setOpened: (value: boolean) => void;
  icon: React.ReactNode;
  title: string;
}

export default function Comp_DrawerToModalShow({
  setOpened,
  icon,
  title,
}: ICompDrawerToModalShow) {
  return (
    <Stack align="center" onClick={() => setOpened}>
      <ActionIcon variant="transparent" color={MainColor.black}>
        {icon}
      </ActionIcon>
      <Text ta={"center"} fz={"xs"}>
        {title}
      </Text>
    </Stack>
  );
}
