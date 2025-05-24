import Comp_SimpleGridDrawer from "@/app/(dev)/(user)/_comp/comp_simple_grid_drawer";
import Comp_StackButtonDrawer from "@/app/(dev)/(user)/_comp/comp_stack_button_drawer";
import ComponentHeaderAdmin from "@/components/main/header_admin";
import { PagePath } from "@/lib/page_path";
import { ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconEdit } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function HeaderAdminDetailUser() {
  const { id } = useParams();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <ComponentHeaderAdmin
        title="Detail User"
        buttonRight={
          <ActionIcon
            variant="transparent"
            size={40}
            onClick={() => setOpened(true)}
          >
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
          title="Edit User"
          path={PagePath.admin_user_edit({ id: id as string })}
          icon={<IconEdit />}
        />
      </Comp_SimpleGridDrawer>
    </>
  );
}
