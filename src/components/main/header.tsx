/* eslint-disable @typescript-eslint/no-unused-vars */
import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Box, Burger, Group, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import {
  IconCaretLeftFilled,
  IconChevronCompactLeft,
  IconChevronCompactRight,
  IconChevronLeft,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ComponentHeader({
  title,
  buttonLeft,
  buttonRight,
  newComponents,
}: {
  title: string;
  buttonLeft?: React.ReactNode;
  buttonRight?: React.ReactNode;
  newComponents?: React.ReactNode;
}) {
  const router = useRouter();
  const { width } = useViewportSize();

  return (
    <>
      <Box
        style={{
          height: 60,
          padding: "0 16px",
          backgroundColor: MainColor.darkblue,
          color: MainColor.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          // flexShrink: 0,clea
          top: 0,
          zIndex: 10,
          borderTopLeftRadius: width > 480 ? "20px" : 0,
          borderTopRightRadius: width > 480 ? "20px" : 0,
        }}
      >
        {newComponents ?? (
          <>
            {buttonLeft ?? (
              <ActionIcon variant="transparent">
                <IconChevronLeft
                  color={MainColor.white}
                  size={20}
                  onClick={() => router.back()}
                />
              </ActionIcon>
            )}
            <Text fw={600} size="lg">
              {title ?? "-"}
            </Text>

            {buttonRight ?? (
              <ActionIcon
                style={{
                  cursor: "none",
                }}
                disabled
                variant="transparent"
                bg={MainColor.darkblue}
              />
            )}
          </>
        )}
      </Box>
    </>
  );
}
