import Comp_SimpleGridDrawer from "@/app/(dev)/(user)/_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "@/app/(dev)/(user)/_comp/comp_stack_button_drawer";
import { dummyItem } from "@/components/dummy/list_data_barang";
import ComponentHeaderAdmin from "@/components/main/header_admin";
import { IItem } from "@/lib/interface/i_item";
import { PagePath } from "@/lib/page_path";
import { ActionIcon } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { IconClipboardList, IconDotsVertical } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function HeaderAdmin_DetailPeminjaman() {
  const { id } = useParams();
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState<IItem>();

  useShallowEffect(() => {
    handlerFilterData();
  }, []);

  async function handlerFilterData() {
    const response = dummyItem.find((item) => item.id === id);
    setData(response);
  }

  return (
    <>
      <ComponentHeaderAdmin
        title={`Detail ${
          data?.status === "tersedia"
            ? "Peminjaman"
            : data?.status === "tidak tersedia"
            ? "Penolakan"
            : data?.status === "perawatan"
            ? "Diterima"
            : ""
        }`}
        buttonRight={
          <ActionIcon variant="transparent" onClick={() => setOpened(true)}>
            <IconDotsVertical color="white" />
          </ActionIcon>
        }
      />

      <Comp_SimpleGridDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        cols={2}
      >
        <Comp_StackButtonDrawer
          title="Detail Barang"
          path={PagePath.admin_item_detail({ id: id as string })}
          icon={<IconClipboardList />}
        />
      </Comp_SimpleGridDrawer>
    </>
  );
}
