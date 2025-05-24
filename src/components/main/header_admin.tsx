import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Box, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

type IComponentHeaderAdmin = {
  title?: string;
  buttonLeft?: React.ReactNode;
  pathLeft?: string;
  buttonRight?: React.ReactNode;
  newComponents?: React.ReactNode;
  disableButtonLeft?: boolean;
};

export default function ComponentHeaderAdmin({
  title,
  buttonLeft,
  pathLeft,
  buttonRight,
  newComponents,
  disableButtonLeft,
}: IComponentHeaderAdmin) {
  const router = useRouter();
  const { width } = useViewportSize();

  return (
    <>
      <Box
        style={{
          height: 60,
          padding: "0 16px",
          backgroundColor: MainColor.black,
          color: MainColor.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          // flexShrink: 0,clea
          top: 0,
          zIndex: 10,
          borderTopLeftRadius: width > 480 ? "10px" : 0,
          borderTopRightRadius: width > 480 ? "10px" : 0,
        }}
      >
        {newComponents ?? (
          <>
            {disableButtonLeft ? (
              <ActionIcon disabled bg={MainColor.black} variant="transparent" />
            ) : (
              buttonLeft ?? (
                <ActionIcon variant="transparent">
                  <IconChevronLeft
                    color={MainColor.white}
                    size={20}
                    onClick={() =>
                      pathLeft
                        ? router.push(pathLeft, { scroll: false })
                        : router.back()
                    }
                  />
                </ActionIcon>
              )
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
                bg={MainColor.black}
              />
            )}
          </>
        )}
      </Box>
    </>
  );
}
