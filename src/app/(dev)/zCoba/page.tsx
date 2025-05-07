"use client"

import { Box, Group, Text, Burger } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {
  IconHome,
  IconHeart,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";

export default function MobileLayout() {
  const [opened, setOpened] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const currentScrollTop = scrollRef.current.scrollTop;
      const scrollingDown = currentScrollTop > lastScrollTop.current;
      const scrolledFarEnough =
        Math.abs(currentScrollTop - lastScrollTop.current) > 5;

      if (scrolledFarEnough) {
        setShowHeader(!scrollingDown);
        setShowFooter(!scrollingDown);
        lastScrollTop.current = currentScrollTop;
      }
    };

    const scrollEl = scrollRef.current;
    scrollEl?.addEventListener("scroll", handleScroll);
    return () => scrollEl?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100dvh",
        backgroundColor: "#e9ecef",
        overflow: "hidden",
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
          borderRadius: 8,
          position: "relative",
        }}
      >
        {/* Header */}
        <Box
          style={{
            height: 60,
            padding: "0 16px",
            backgroundColor: "#00aa5b",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 10,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            transform: showHeader ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.25s ease-in-out",
          }}
        >
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color="white"
          />
          <Text fw={600} size="lg">
            Tokopedia Clone
          </Text>
          <Group gap="xs">
            <IconShoppingCart size={20} />
            <IconUser size={20} />
          </Group>
        </Box>

        {/* Konten scrollable */}
        <Box
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <Box
              key={index}
              style={{
                padding: "8px 16px",
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              <Text fw={500}>Item {index + 1}</Text>
              <Box p="md">
                <Text>Promo Banner</Text>
                <Box mt="sm" bg="gray.1" p="md" style={{ borderRadius: 8 }}>
                  Kategori
                </Box>
                <Box mt="sm" bg="gray.1" p="md" style={{ borderRadius: 8 }}>
                  Produk Untukmu
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Box
          style={{
            height: 60,
            padding: "8px 16px",
            backgroundColor: "#fff",
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexShrink: 0,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            transform: showFooter ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.25s ease-in-out",
          }}
        >
          <Box style={{ textAlign: "center" }}>
            <IconHome size={20} />
            <Text size="xs">Home</Text>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <IconHeart size={20} />
            <Text size="xs">Wishlist</Text>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <IconShoppingCart size={20} />
            <Text size="xs">Cart</Text>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <IconUser size={20} />
            <Text size="xs">Account</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
