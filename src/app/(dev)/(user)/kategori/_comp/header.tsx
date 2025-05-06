import ComponentHeader from "@/components/main/header";

export default function KategoriHeader({ title }: { title?: string }) {
  return (
    <>
      <ComponentHeader title={`Kategori ${title ?? ""}`} />
    </>
  );
}
