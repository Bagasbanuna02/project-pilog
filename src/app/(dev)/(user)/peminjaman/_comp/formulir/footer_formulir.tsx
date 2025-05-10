import ComponentFooter from "@/components/main/footer";
import { PagePath } from "@/lib/page_path";
import { Button } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";

export default function FooterFormulir() {
  const param = useParams<{ id: string }>();
  const router = useRouter();
  return (
    <>
      <ComponentFooter>
        <Button
          w={"100%"}
          color={"green"}
          radius={"xl"}
          onClick={() =>
            router.push(PagePath.daftar_peminjaman({ id: param.id }), {
              scroll: false,
            })
          }
        >
          Simpan
        </Button>
      </ComponentFooter>
    </>
  );
}
