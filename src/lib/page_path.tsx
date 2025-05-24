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

  // Item
  admin_item: "/admin/item",
  admin_item_create: "/admin/item/create",
  admin_item_detail: ({ id }: { id: string }) => `/admin/item/${id}`,
  admin_item_edit: ({ id }: { id: string }) => `/admin/item/${id}/edit`,
  admin_item_status: ({ id }: { id: string }) => `/admin/item/${id}/status`,

  // Peminjaman
  // admin_peminjaman: "/admin/peminjaman",
  admin_peminjaman_list: ({ status }: { status: string }) => `/admin/peminjaman/list/${status}`,
  admin_peminjaman_id: ({ id }: { id: string }) => `/admin/peminjaman/${id}/`, 

  // User
  admin_user: "/admin/user",
  admin_user_create: "/admin/user/create",
  admin_user_detail: ({ id }: { id: string }) => `/admin/user/${id}`,
  admin_user_edit: ({ id }: { id: string }) => `/admin/user/${id}/edit`,
};
