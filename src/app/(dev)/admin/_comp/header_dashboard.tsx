import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { ActionIcon } from "@mantine/core";
import {
  IconBell,
  IconCirclePlus,
  IconDotsVertical,
  IconList,
  IconListDetails,
} from "@tabler/icons-react";
import { useState } from "react";
import Comp_SimpleGridDrawer from "../../(user)/_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "../../(user)/_comp/comp_stack_button_drawer";

export default function HeaderDashboard() {
  const [opened, setOpened] = useState(false);

  const listPathDrawer = [
    {
      title: "Tambah Barang",
      path: "/admin/item/create",
      icon: <IconCirclePlus />,
    },
    {
      title: "Persetujuan Peminjaman",
      path: "/admin/approve-admin",
      icon: <IconListDetails />,
    },
    {
      title: "Data Barang",
      path: "/admin/item",
      icon: <IconList />,
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Dashboard Admin"
        buttonLeft={
          <ActionIcon variant="transparent" onClick={() => {}}>
            <IconBell color={MainColor.white} />
          </ActionIcon>
        }
        buttonRight={
          <ActionIcon variant="transparent" onClick={() => setOpened(true)}>
            <IconDotsVertical color={MainColor.white} />
          </ActionIcon>
        }
      />

      <Comp_SimpleGridDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        cols={listPathDrawer.length}
      >
        {listPathDrawer.map((item, index) => (
          <Comp_StackButtonDrawer key={index} {...item} />
        ))}
      </Comp_SimpleGridDrawer>
    </>
  );
}
