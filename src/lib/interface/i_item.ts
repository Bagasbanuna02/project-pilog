
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
};
