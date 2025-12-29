import { Box, Container, Stack, Typography } from "@mui/material";
import { Board } from "../../widgets/board/Board.tsx";

export const KanbanPage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pt: 2.5 }}>
      <Container maxWidth="lg" sx={{ px: 2.5 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h2">Design weekly</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              A board to keep track of design progress.
            </Typography>
          </Stack>

          <Board />
        </Stack>
      </Container>
    </Box>
  );
};
