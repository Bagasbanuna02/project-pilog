import { AssetImagePath } from "@/lib/assets-image-path";
import { IItem } from "@/lib/interface/i_item";

export { availableItems, borrowedItems };

// Available items
const availableItems: IItem[] = [
  {
    id: "1",
    type: "Mobil",
    name: "Mitsubishi Pajero Sport",
    image: AssetImagePath.dummy_car,
  },
  {
    id: "2",
    type: "Mobil",
    name: "Mitsubishi Pajero Sport",
    image: AssetImagePath.dummy_car,
  },
  {
    id: "3",
    type: "Mobil",
    name: "Mitsubishi Pajero Sport",
    image: AssetImagePath.dummy_car,
  },
  {
    id: "4",
    type: "Mobil",
    name: "Mitsubishi Pajero Sport",
    image: AssetImagePath.dummy_car,
  },
];

// Borrowed items
const borrowedItems: IItem[] = [
  {
    id: "5",
    type: "Mobil",
    name: "Mitsubishi Pajero Sport",
    image: AssetImagePath.dummy_car,
    status: "dipinjam",
  },
  {
    id: "6",
    type: "Mobil",
    name: "Mitsubishi Pajero Sport",
    image: AssetImagePath.dummy_car,
    status: "dipinjam",
  },
];
