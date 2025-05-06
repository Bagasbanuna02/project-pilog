import { Box, Text } from "@mantine/core";
import { IconHome, IconHeart, IconShoppingCart, IconUser } from "@tabler/icons-react";

export default function UIFooter() {
   return (
     <>
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
     </>
   );
}