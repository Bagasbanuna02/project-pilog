import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { PagePath } from "@/lib/page_path";
import { ActionIcon, Group, Text } from "@mantine/core";
import { IconDashboard, IconSearch, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useId } from "react";

export default function HeaderBeranda() {
  const router = useRouter();
  const uuid = useId();

  return (
    <>
      <ComponentHeader
        newComponents={
          <Group justify="space-between" w={"100%"}>
            <Text fw={600} size="lg">
              Beranda
            </Text>

            <Group justify="flex-end">
              <ActionIcon
                variant="subtle"
                aria-label="Search"
                onClick={() => {
                  router.push(PagePath.admin_dashboard, {
                    scroll: false,
                  });
                }}
              >
                <IconDashboard color={MainColor.white} size={20} />
              </ActionIcon>

              <ActionIcon
                variant="subtle"
                aria-label="Search"
                onClick={() =>
                  router.push(PagePath.profile({ id: uuid }), { scroll: false })
                }
              >
                <IconUser color={MainColor.white} size={20} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                aria-label="Search"
                onClick={() => router.push(PagePath.search, { scroll: false })}
              >
                <IconSearch color={MainColor.white} size={20} />
              </ActionIcon>
            </Group>
          </Group>
        }
        // title="Beranda"
        // buttonLeft={
        //   <ActionIcon
        //     variant="subtle"
        //     aria-label="Search"
        //     onClick={() =>
        //       router.push(PagePath.profile({ id: uuid }), { scroll: false })
        //     }
        //   >
        //     <IconUser color={MainColor.white} size={20} />
        //   </ActionIcon>
        // }
        // buttonRight={
        //   <Group>
        //     <ActionIcon
        //       variant="subtle"
        //       aria-label="Search"
        //       onClick={() => router.push(PagePath.search, { scroll: false })}
        //     >
        //       <IconSearch color={MainColor.white} size={20} />
        //     </ActionIcon>
        //   </Group>
        // }
      />
    </>
  );
}
