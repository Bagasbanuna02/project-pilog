export { PagePath };

const PagePath = {
  beranda: "/beranda",
  kategori: "/kategori",
  kategori_id: ({ id }: { id: string }) => `/kategori/${id}`,
  detail: ({ id }: { id: string }) => `/detail/${id}`,

  // Peminjaman
  peminjaman_id: ({ id }: { id: string }) => `/peminjaman/${id}`,
  formulir_peminjaman: ({ id }: { id: string }) => `/peminjaman/${id}/formulir`,
  daftar_peminjaman: ({ id }: { id: string }) => `/peminjaman/${id}/daftar`,
};
