import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { LabelChip, type LabelTone } from "../../shared/ui/LabelChip";

export type Label = { text: string; tone?: LabelTone };

export const Card = ({
  title,
  description,
  labels,
  avatars,
}: {
  title: string;
  description?: string;
  labels?: Label[];
  avatars?: string[];
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid #DDDDDD",
        borderRadius: "8px",
        pt: 1.5,
        pb: 1.5,
        px: 2,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.07)",
      }}
    >
      <Stack spacing={1}>
        {avatars && (
          <Stack direction="row" spacing={0.5}>
            {avatars.map((src, i) => (
              <Avatar key={i} src={src} sx={{ width: 18, height: 18 }} />
            ))}
          </Stack>
        )}
        <Typography variant="h4">{title}</Typography>

        {description && (
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        )}
        {labels && labels.length > 0 && (
          <Stack direction="row" spacing={0.5}>
            {labels.map((l, i) => (
              <LabelChip key={i} label={l.text} tone={l.tone ?? "pink"} />
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};
