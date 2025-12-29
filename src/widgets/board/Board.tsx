import { Box, Paper, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Lane } from "../../entities/lane/Lane.tsx";
import { SectionLabel } from "../../shared/ui/SectionLabel.tsx";
import { boardColumns } from "./board.mock.ts";

export const Board = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "24px",
        p: 1.5,
      }}
    >
      <Grid container spacing={1.5}>
        {boardColumns.map((col) => (
          <Grid key={col.label} size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{ p: 1.5, bgcolor: "background.paper", borderRadius: "12px" }}
            >
              <Stack spacing={1.5}>
                <SectionLabel text={col.label} />
                <Lane>
                  {col.cards.map((card, i) => (
                    <Lane.Card key={i} {...card} />
                  ))}
                </Lane>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
