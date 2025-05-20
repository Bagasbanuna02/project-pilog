import Comp_SimpleGridDrawer from "@/app/(dev)/(user)/_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "@/app/(dev)/(user)/_comp/comp_stack_button_drawer";
import ComponentHeaderAdmin from "@/components/main/header_admin";
import { MainColor } from "@/lib/color-palette";
import { PagePath } from "@/lib/page_path";
import { ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconEdit } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function HeaderAdmin_Item_Detail() {
  const { id } = useParams();
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <ComponentHeaderAdmin
        title="Detail Barang"
        buttonRight={
          <ActionIcon variant="transparent" onClick={() => setOpened(true)}>
            <IconDotsVertical color={MainColor.white} />
          </ActionIcon>
        }
      />

      <Comp_SimpleGridDrawer
        opened={opened}
        onClose={() => setOpened(false)}
        cols={2}
      >
        <Comp_StackButtonDrawer
          title="Edit Data"
          path={PagePath.admin_item_edit({ id: id as string })}
          icon={<IconEdit />}
        />
        <Comp_StackButtonDrawer
          title="Ubah Status"
          path={PagePath.admin_item_status({ id: id as string })}
          icon={<IconEdit />}
        />
      </Comp_SimpleGridDrawer>
    </>
  );
}
