import ComponentHeaderAdmin from "@/components/main/header_admin";
import { PagePath } from "@/lib/page_path";

export default function HeaderAdmin_Item() {
  return (
    <ComponentHeaderAdmin
      title="Data Barang"
      pathLeft={PagePath.admin_dashboard}
    />
  );
}
