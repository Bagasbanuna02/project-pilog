import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { ActionIcon, Group } from "@mantine/core";
import { IconSearch, IconUser } from "@tabler/icons-react";

export default function HeaderBeranda() {
    return (
      <>
        <ComponentHeader
          title="Beranda"
          buttonLeft={
            <ActionIcon variant="subtle" aria-label="Search">
              <IconUser color={MainColor.white} size={20} />
            </ActionIcon>
          }
          buttonRight={
            <Group>
              <ActionIcon variant="subtle" aria-label="Search">
                <IconSearch color={MainColor.white} size={20} />
              </ActionIcon>
            </Group>
          }
        />
      </>
    );
}