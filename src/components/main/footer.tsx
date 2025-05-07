import { Box } from "@mantine/core";

export default function ComponentFooter({
  children,
  isBorder
}: {
  children: React.ReactNode;
  isBorder?: boolean
}) {
  return (
    <>
      <Box
        style={{
          height: 60,
          padding: "8px 16px",
          backgroundColor: "#fff",
          borderTop: isBorder ? `1px solid #e0e0e0` : "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexShrink: 0,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        {children}
        {/* <Box style={{ textAlign: "center" }}>
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
         </Box> */}
      </Box>
    </>
  );
}
