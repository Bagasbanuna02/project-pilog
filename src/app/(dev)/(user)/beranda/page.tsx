"use client";

import { UI_Beranda } from "./_comp/ui_beranda";
import HeaderBeranda from "./_comp/header";

export default function BerandaPage() {
  return (
    <>
      {/* Header */}
      <HeaderBeranda />

      {/* Categories */}
      <UI_Beranda/>
    </>
  );
}
