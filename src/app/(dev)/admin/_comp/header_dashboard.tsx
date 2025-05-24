import { MainColor } from "@/lib/color-palette";
import { ActionIcon } from "@mantine/core";
import {
  IconCirclePlus,
  IconDotsVertical,
  IconList,
  IconListDetails,
  IconListLetters,
  IconLogout,
  IconTransform,
} from "@tabler/icons-react";
import { useState } from "react";
import Comp_SimpleGridDrawer from "../../(user)/_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "../../(user)/_comp/comp_stack_button_drawer";
import ComponentHeaderAdmin from "@/components/main/header_admin";
import { PagePath } from "@/lib/page_path";

export default function HeaderDashboard() {
  const [opened, setOpened] = useState(false);

  const listPathDrawer = [
    {
      title: "Persetujuan Peminjaman",
      path: PagePath.admin_peminjaman_list({ status: "menunggu" }),
      icon: <IconListDetails />,
    },
    {
      title: "Tambah Barang",
      path: PagePath.admin_item_create,
      icon: <IconCirclePlus />,
    },
    {
      title: "Data Barang",
      path: PagePath.admin_item,
      icon: <IconList />,
    },
    {
      title: "Daftar User",
      path: PagePath.admin_user,
      icon: <IconListLetters />,
    },
    {
      title: "Tampilan User",
      path: PagePath.beranda,
      icon: <IconTransform />,
    },
  ];

  return (
    <>
      <ComponentHeaderAdmin
        title="Dashboard Admin"
        disableButtonLeft
        buttonRight={
          <ActionIcon variant="transparent" onClick={() => setOpened(true)}>
            <IconDotsVertical color={MainColor.white} />
          </ActionIcon>
        }
      />

      <Comp_SimpleGridDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        cols={3}
      >
        {listPathDrawer.map((item, index) => (
          <Comp_StackButtonDrawer key={index} {...item} />
        ))}


        <Comp_StackButtonDrawer
          title="Keluar"
          path={PagePath.login}
          icon={<IconLogout />}
          color="red"
        />
      </Comp_SimpleGridDrawer>
    </>
  );
}
