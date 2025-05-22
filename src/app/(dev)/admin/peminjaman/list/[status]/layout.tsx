"use client";

import ComponentContent from "@/components/main/content";
import { MainColor } from "@/lib/color-palette";
import { listStatusPeminjaman } from "@/lib/master/list_status_peminjaman";
import { PagePath } from "@/lib/page_path";
import { Stack, Tabs } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderAdmin_ListPeminjaman from "../../_comp/list/header_list";

export default function LayoutPeminjaman({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const statusParam = params.status as string | undefined;
  const [activeTab, setActiveTab] = useState<string>("menunggu");
  const [scroll] = useWindowScroll();

  useEffect(() => {
    setActiveTab(statusParam ?? "menunggu");
  }, [statusParam]);

  const handleTabChange = (tab: string | null) => {
    if (tab) {
      router.replace(PagePath.admin_peminjaman_list({ status: tab }));
    }
  };

  return (
    <>
      <HeaderAdmin_ListPeminjaman/>
      <ComponentContent >
        <Stack p="lg">
          <Tabs variant="pills" value={activeTab} onChange={handleTabChange}>
            <Tabs.List
              grow
              bg={"white"}
              style={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                transition: "box-shadow 0.3s ease",
                boxShadow: scroll.y > 50 ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
              }}
            >
              {listStatusPeminjaman.map((item) => (
                <Tabs.Tab
                  key={item.value}
                  value={item.value}
                  fw={"bold"}
                  style={{
                    transition: "0.5s",
                    color:
                      activeTab === item.value
                        ? MainColor.darkblue
                        : MainColor.black,
                    backgroundColor:
                      activeTab === item.value
                        ? MainColor.yellow
                        : MainColor.white,
                    border:
                      activeTab === item.value
                        ? `1px solid ${MainColor.yellow}`
                        : `1px solid ${MainColor.white}`,
                  }}
                >
                  {item.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {listStatusPeminjaman.map((item) => (
              <Tabs.Panel key={item.value} value={item.value}>
                {/* Render children jika tab sesuai */}
                {item.value === activeTab && children}
              </Tabs.Panel>
            ))}
          </Tabs>
        </Stack>
      </ComponentContent>
    </>
  );
}
