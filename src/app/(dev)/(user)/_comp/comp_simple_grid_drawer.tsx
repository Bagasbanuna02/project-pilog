"use client";

import { MantineSize, SimpleGrid } from "@mantine/core";
import ComponentDrawer from "./comp_drawer";

interface ICompSimpleGridDrawer {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
  cols?: number;
  title?: string;
  size?: number | MantineSize | (string & {}) | undefined;
}

export default function Comp_SimpleGridDrawer({
  opened,
  onClose,
  children,
  cols,
  title,
  size,
}: ICompSimpleGridDrawer) {
  return (
    <ComponentDrawer
      opened={opened}
      onClose={onClose}
      title={title}
      size={size}
    >
      <SimpleGrid cols={cols ?? 3}>{children}</SimpleGrid>
    </ComponentDrawer>
  );
}
