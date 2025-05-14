"use client";

import { Drawer, MantineSize } from "@mantine/core";

type BottomDrawerProps = {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: number | MantineSize | (string & {}) | undefined;
};

export default function ComponentDrawer({
  opened,
  onClose,
  title,
  children,
  size,
}: BottomDrawerProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="bottom"
      size={size ?? "xs"}
      padding="md"
      withCloseButton
      overlayProps={{ opacity: 0.5, blur: 2 }}
      styles={{
        content: {
          margin: "0 auto", // posisi center secara horizontal
          maxWidth: 480, // sesuai layout utama
          width: "100%", // penuh di mobile
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      }}
      title={title ?? ""}
    >
      {children}
    </Drawer>
  );
}
