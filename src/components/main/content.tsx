import { Box } from "@mantine/core";

export default function ComponentContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box style={{ flex: 1, overflowY: "auto" }}>{children}</Box>
    </>
  );
}
