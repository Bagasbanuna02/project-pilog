import { AssetImagePath } from "@/lib/assets-image-path";
import { IItem } from "@/lib/interface/i_item";
import { PagePath } from "@/lib/page_path";
import { Badge, Box, Grid, Image, Paper, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Comp_BoxItem({ data }: { data: IItem }) {
    const router = useRouter();
    return (
        <>
            <Paper
                key={data.id}
                withBorder
                p={0}
                radius="md"
                style={{ overflow: "hidden" }}
                onClick={() =>
                    router.push(PagePath.detail({ id: data.id.toString() }), {
                        scroll: false,
                    })
                }
            >
                <Image src={AssetImagePath.dummy_image} height={120} alt={data.name} />
                <Box p="xs" pos="relative">
                    <Grid>
                        <Grid.Col span={"auto"}>
                            <Text fw={500} size="sm" lineClamp={1}>
                                {data.category}
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={"content"}>
                            {data.status === "perawatan" && (
                                <Badge color="gray" variant="filled" size="sm">
                                    Perawatan
                                </Badge>
                            )}
                            {data.status === "tidak tersedia" && (
                                <Badge color="orange" variant="filled" size="sm">
                                    Dipinjam
                                </Badge>
                            )}
                        </Grid.Col>
                    </Grid>
                    <Text size="xs" lineClamp={1}>
                        {data.name}
                    </Text>
                </Box>
            </Paper>
        </>
    );
}
