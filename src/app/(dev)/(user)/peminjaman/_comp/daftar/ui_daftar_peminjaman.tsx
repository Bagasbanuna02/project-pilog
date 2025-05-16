import { listUserPeminjaman } from "@/components/dummy/list_peminjaman_user";
import { MainColor } from "@/lib/color-palette";
import { PagePath } from "@/lib/page_path";
import { Badge, Grid, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function UI_DaftarPeminjaman() {
  const router = useRouter();
  return (
    <>
      <Stack p={"lg"}>
        {listUserPeminjaman.map((e, i) => (
          <Grid
            key={i}
            bg={MainColor.white}
            p={"lg"}
            align="center"
            style={{ borderRadius: 8 }}
            onClick={() =>
              router.push(PagePath.peminjaman_id({ id: e.id }), {
                scroll: false,
              })
            }
          >
            <Grid.Col span={"auto"}>
              <Text fw={500} size="sm" lineClamp={1}>
                {e.nama}
              </Text>
            </Grid.Col>
            <Grid.Col span={"content"}>
              {e.status === "Dipinjam" ? (
                <Badge color="orange" variant="filled" size="sm">
                  Dipinjam
                </Badge>
              ) : (
                "-"
              )}
            </Grid.Col>
          </Grid>
        ))}
      </Stack>
    </>
  );
}
