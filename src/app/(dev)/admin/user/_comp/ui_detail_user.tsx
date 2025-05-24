import Comp_DetailData from "@/app/(dev)/(user)/_comp/comp_detail_data";
import { listdummyUser } from "@/components/dummy/list_data_user";
import ComponentContent from "@/components/main/content";
import { Stack } from "@mantine/core";
import { useParams } from "next/navigation";

export default function UIAdmin_DetailUser() {
  const { id } = useParams();
  const dataUser = listdummyUser.find((item) => item.id === id);

  const listData = [
    {
      title: "Nama",
      value: dataUser?.name || "-",
    },
    {
      title: "Email",
      value: dataUser?.email || "-",
    },
    {
      title: "Departemen",
      value: dataUser?.departemen || "-",
    },
    {
      title: "Nomor",
      value: dataUser?.nomor || "-",
    },
    {
      title: "Alamat",
      value: dataUser?.alamat || "-",
    },
  ];

  return (
    <>
      <ComponentContent>
        <Stack p={"lg"}>
          {listData.map((item, index) => (
            <Comp_DetailData key={index} data={item} />
          ))}
        </Stack>
      </ComponentContent>
    </>
  );
}
