// Item type
export interface IItem {
  id: string;
  type: string;
  name: string;
  image: string;
  status?: "dipinjam" | "tersedia";
}
