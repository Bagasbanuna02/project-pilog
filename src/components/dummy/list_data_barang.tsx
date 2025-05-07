import { AssetImagePath } from "@/lib/assets-image-path";
import { IItem } from "@/lib/interface/i_item";

export { availableItems, borrowedItems, dataItem };

// Available items
const availableItems: IItem[] = [
  {
    id: "1",
    type: "Transportasi",
    name: "Toyota Avanza",
    image: AssetImagePath.dummy_car,
  },
  {
    id: "2",
    type: "Transportasi",
    name: "Toyota Avanza",
    image: AssetImagePath.dummy_car,
  },
  {
    id: "3",
    type: "Transportasi",
    name: "Toyota Avanza",
    image: AssetImagePath.dummy_car,
  },
  {
    id: "4",
    type: "Transportasi",
    name: "Toyota Avanza",
    image: AssetImagePath.dummy_car,
  },
];

// Borrowed items
const borrowedItems: IItem[] = [
  {
    id: "5",
    type: "Transportasi",
    name: "Toyota Avanza",
    image: AssetImagePath.dummy_car,
    status: "dipinjam",
  },
  {
    id: "6",
    type: "Transportasi",
    name: "Toyota Avanza",
    image: AssetImagePath.dummy_car,
    status: "dipinjam",
  },
];


// Data satuan
const dataItem = {
  title: "Toyota Avanza",
  code: "AVN-123",
  merk: "Toyota",
  type: "Transportasi",
  color: "Abu-abu",
  condition: "Baik",
  status: "tersedia",
  location: "Jalan Jend. Sudirman No. 123",
  image: AssetImagePath.dummy_image
};