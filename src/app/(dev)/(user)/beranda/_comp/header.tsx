import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { PagePath } from "@/lib/page_path";
import { ActionIcon, Group } from "@mantine/core";
import { IconSearch, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useId } from "react";

export default function HeaderBeranda() {
  const router = useRouter();
  const uuid = useId();

  return (
    <>
      <ComponentHeader
        title="Beranda"
        buttonLeft={
          <ActionIcon
            variant="subtle"
            aria-label="Search"
            onClick={() =>
              router.push(PagePath.profile({ id: uuid }), { scroll: false })
            }
          >
            <IconUser color={MainColor.white} size={20} />
          </ActionIcon>
        }
        buttonRight={
          <Group>
            <ActionIcon
              variant="subtle"
              aria-label="Search"
              onClick={() => router.push(PagePath.search, { scroll: false })}
            >
              <IconSearch color={MainColor.white} size={20} />
            </ActionIcon>
          </Group>
        }
      />
    </>
  );
}
