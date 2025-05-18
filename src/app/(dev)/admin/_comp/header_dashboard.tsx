import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { ActionIcon } from "@mantine/core";
import {
    IconCirclePlus,
    IconDotsVertical,
    IconList,
    IconListDetails
} from "@tabler/icons-react";
import { useState } from "react";
import Comp_SimpleGridDrawer from "../../(user)/_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "../../(user)/_comp/comp_stack_button_drawer";

export default function HeaderDashboard() {
  const [opened, setOpened] = useState(false);

  const listPathDrawer = [
    {
      title: "Tambah Barang",
      path: "/admin/data-barang/tambah",
      icon: <IconCirclePlus />,
    },
    {
      title: "Persetujuan Peminjaman",
      path: "/admin/approve-admin",
      icon: <IconListDetails />,
    },
    {
      title: "Data Barang",
      path: "/admin/data-barang",
      icon: <IconList />,
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Dashboard"
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
