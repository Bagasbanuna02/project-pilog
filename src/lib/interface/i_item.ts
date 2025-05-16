// Item type
// export interface IItem {
//   id: string;
//   type: string;
//   name: string;
//   image: string;
//   status?: "dipinjam" | "tersedia";
// }

export interface IItem {
  id: string;
  name: string;
  merk: string;
  category:
    | "Transportasi"
    | "Ruangan"
    | "Peralatan elektronik"
    | "Peralatan kantor"
    | "Peralatan event"
    | "Peralatan lainnya";
  color: string;
  condition:
    | "Baik"
    | "Cukup"
    | "Rusak Ringan"
    | "Rusak Berat"
    | "Baru"
    | "Hilang";
  status: "tersedia" | "perawatan" | "tidak tersedia";
  location: string;
  image: string;
  description: string;
}

export type IDetailPeminjaman = {
  nama: string;
  foto: string; // URL ke foto profil
  barang: string;
  status: "Dipinjam" | "Tersedia" | string; // Tambah opsi sesuai kebutuhan
  mulai: string; // Format ISO date: YYYY-MM-DD
  berakhir: string; // Format ISO date
  deskripsi: string;
};
