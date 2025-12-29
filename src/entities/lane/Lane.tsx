import { Stack } from "@mui/material";
import { Card } from "../../entities/card/Card.tsx";
import type { FC, ReactNode } from "react";

type LaneComponent = FC<{ children?: ReactNode }> & { Card: typeof Card };

export const Lane: LaneComponent = ({ children }) => {
  return <Stack spacing={2}>{children}</Stack>;
};

Lane.Card = Card;
