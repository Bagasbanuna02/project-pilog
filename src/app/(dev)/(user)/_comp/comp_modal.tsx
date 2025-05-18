"use client";

import { MainColor } from "@/lib/color-palette";
import { MantineSize, Modal } from "@mantine/core";

interface ICompModal {
    opened: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    size?: number | MantineSize | (string & {}) | undefined;
}

export default function ComponentModal({
    opened,
    onClose,
    children,
    title,
}: ICompModal) {
    return (
      <Modal
        opened={opened}
        onClose={onClose}
        centered
        title={title ?? ""}
        withCloseButton={false}
        closeOnClickOutside={false}
        styles={{
          content: {
            backgroundColor: MainColor.darkblue,
            color: MainColor.white,
          },
          body: {
            backgroundColor: MainColor.darkblue,
            color: MainColor.white,
          },
          header: {
            backgroundColor: MainColor.darkblue,
            color: MainColor.white,
          },
        }}
      >
       {children}
      </Modal>
    );
}