import { Box } from "@mantine/core";

export default function ComponentContent({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) {
  return (
    <>
      <Box style={{ flex: 1, overflowY: "auto", ...style }}>{children}</Box>
    </>
  );
}
