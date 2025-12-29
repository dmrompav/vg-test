import { Chip } from "@mui/material";

export type LabelTone = "pink" | "grey";

export const LabelChip = ({
  label,
  tone,
}: {
  label: string;
  tone?: LabelTone;
}) => {
  return (
    <Chip
      label={label}
      sx={(theme) => ({
        backgroundColor:
          tone === "pink" ? theme.palette.chip.pink : theme.palette.chip.grey,
        borderRadius: "8px",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "-0.4px",
        lineHeight: "17px",
        height: "auto",
        padding: 0,
        color: theme.palette.text.tertiary,
        "& .MuiChip-label": {
          paddingLeft: 1.25,
          paddingRight: 1.25,
          paddingTop: 0.5,
          paddingBottom: 0.5,
        },
      })}
    />
  );
};
