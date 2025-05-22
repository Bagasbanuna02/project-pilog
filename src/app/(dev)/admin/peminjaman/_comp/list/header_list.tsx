import ComponentHeaderAdmin from "@/components/main/header_admin";
import { PagePath } from "@/lib/page_path";

export default function HeaderAdmin_ListPeminjaman() {
  return (
    <>
      <ComponentHeaderAdmin title="Peminjaman" pathLeft={PagePath.admin_dashboard} />
    </>
  );
}
