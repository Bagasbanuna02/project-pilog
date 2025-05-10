"use client";

import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Box, Group, Title } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

type BottomDrawerProps = {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function ComponentDrawer({
  opened,
  onClose,
  title,
  children,
}: BottomDrawerProps) {
  return (
    <Box
      style={{
        position: "relative", // <== GANTI ke relative agar bisa ikut layout
        width: "100%",
        height: 0, // agar tidak mengganggu layout
      }}
    >
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        //   borderTop: `1px solid ${MainColor.darkblue}`,
          backgroundColor: "white",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          padding: 16,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
          transform: opened ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
          zIndex: 20,
          maxWidth: "100%",
        }}
      >
        <Group justify="space-between">
          <Title order={4} c={MainColor.darkblue}>
            {title ?? ""}
          </Title>
          <ActionIcon variant="transparent" onClick={onClose}>
            <IconX color={MainColor.darkblue} />
          </ActionIcon>
        </Group>

        <div>{children}</div>
      </Box>
    </Box>
  );
}
