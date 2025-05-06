/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Box, Group, Text, Burger } from "@mantine/core";
import { useState } from "react";
import {
  IconHome,
  IconHeart,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useViewportSize();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#e9ecef",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          maxWidth: 480,
          backgroundColor: "#f8f9fa",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #dee2e6",
          borderRadius: width > 480 ? "20px" : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
