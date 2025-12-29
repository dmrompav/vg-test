import { Box, Typography } from "@mui/material";

export const SectionLabel = ({ text }: { text: string }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignSelf: "flex-start",
      width: "fit-content",
      px: 1.5,
      py: 0.5,
      bgcolor: "grey.200",
      borderRadius: "20px",
    }}
  >
    <Typography variant="h4" color="text.tertiary" sx={{ fontWeight: 700 }}>
      {text}
    </Typography>
  </Box>
);
