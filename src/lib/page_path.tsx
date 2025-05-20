export { PagePath };

const PagePath = {
  login: "/login",
  beranda: "/beranda",
  kategori: "/kategori",
  kategori_id: ({ id }: { id: string }) => `/kategori/${id}`,
  detail: ({ id }: { id: string }) => `/detail/${id}`,
  search: "/search",

  // Profile
  profile: ({ id }: { id: string }) => `/profile/${id}`,
  profile_edit: ({ id }: { id: string }) => `/profile/${id}/edit`,
  profile_riwayat: ({ id }: { id: string }) => `/profile/${id}/riwayat`,

  // Peminjaman
  peminjaman_id: ({ id }: { id: string }) => `/peminjaman/${id}`,
  formulir_peminjaman: ({ id }: { id: string }) => `/peminjaman/${id}/formulir`,
  daftar_peminjaman: ({ id }: { id: string }) => `/peminjaman/${id}/daftar`,

  // ====== ADMIN  ===== //
  admin_dashboard: "/admin/dashboard",
  admin_item: "/admin/item",
  admin_item_create: "/admin/item/create",
  admin_item_detail: ({ id }: { id: string }) => `/admin/item/${id}`,
  admin_item_edit: ({ id }: { id: string }) => `/admin/item/${id}/edit`,
  admin_item_status: ({ id }: { id: string }) => `/admin/item/${id}/status`,
};
