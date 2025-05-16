"use client";

import dummyUser from "@/components/dummy/data_user";
import ComponentContent from "@/components/main/content";
import ComponentHeader from "@/components/main/header";
import { MainColor } from "@/lib/color-palette";
import { PagePath } from "@/lib/page_path";
import { ActionIcon, Button, Group, Stack, Text } from "@mantine/core";
import {
  IconDotsVertical,
  IconEdit,
  IconList,
  IconLogout,
} from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Comp_DetailData from "../../_comp/comp_detail_data";
import Comp_Modal from "../../_comp/comp_modal";
import Comp_SimpleGridDrawer from "../../_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "../../_comp/comp_stack_button_drawer";

export default function ProfilePage() {
  const router = useRouter();
  const param = useParams<{ id: string }>();
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const data = dummyUser;
  const listData = [
    {
      title: "Nama",
      value: data.nama,
    },
    {
      title: "Email",
      value: data.email,
    },
    {
      title: "Departemen",
      value: data.departemen,
    },
    {
      title: "Nomor",
      value: data.nomor,
    },
    {
      title: "Alamat",
      value: data.alamat,
    },
  ];

  const listButtonDrawer = [
    {
      path: PagePath.profile_edit({ id: param.id }),
      icon: <IconEdit />,
      title: "Edit Profile",
    },
    {
      path: PagePath.profile_riwayat({ id: param.id }),
      icon: <IconList />,
      title: "Riwayat Peminjaman",
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Profile"
        buttonRight={
          <ActionIcon
            variant="transparent"
            onClick={() => {
              setOpenedDrawer(true);
            }}
          >
            <IconDotsVertical color="white" />
          </ActionIcon>
        }
      />

      <ComponentContent>
        <Stack p={"lg"}>
          {listData.map((e, i) => (
            <Comp_DetailData key={i} data={e} />
          ))}
        </Stack>
      </ComponentContent>

      <Comp_SimpleGridDrawer
        opened={openedDrawer}
        onClose={() => setOpenedDrawer(false)}
        cols={listButtonDrawer.length + 1}
        size={"xs"}
      >
        {listButtonDrawer.map((e, i) => (
          <Comp_StackButtonDrawer key={i} {...e} />
        ))}
        <Stack
          align="center"
          onClick={() => {
            setOpenedModal(true);
            setOpenedDrawer(false);
          }}
        >
          <ActionIcon variant="transparent" color={MainColor.red}>
            <IconLogout />
          </ActionIcon>
          <Text ta={"center"} fz={"xs"} color={MainColor.red}>
            Logout
          </Text>
        </Stack>
      </Comp_SimpleGridDrawer>

      <Comp_Modal
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title="Anda Ingin Keluar ?"
      >
        <Group grow>
          <Button radius="xl" onClick={() => setOpenedModal(false)}>
            Tidak
          </Button>
          <Button
            radius="xl"
            onClick={() => {
              router.push(PagePath.login);
            }}
            color="red"
          >
            Ya
          </Button>
        </Group>
      </Comp_Modal>
    </>
  );
}
