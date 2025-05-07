export { PagePath };

const PagePath = {
  beranda: "/beranda",
  kategori: "/kategori",
  kategori_id: ({ id }: { id: string }) => `/kategori/${id}`,
  detail: ({ id }: { id: string }) => `/detail/${id}`,
};
