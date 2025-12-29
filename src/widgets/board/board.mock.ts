import type { Label } from "../../entities/card/Card.tsx";

const avatar = (id: number) => `https://i.pravatar.cc/40?img=${id}`;

export type CardData = {
  title: string;
  description?: string;
  avatars?: string[];
  labels?: Label[];
};

export type BoardColumn = {
  label: string;
  cards: CardData[];
};

export const boardColumns: BoardColumn[] = [
  {
    label: "Last week",
    cards: [
      {
        title: "Review scope",
        description: "Review #390.",
        labels: [
          { text: "Due 4/11", tone: "pink" },
          { text: "Design", tone: "pink" },
        ],
      },
      { title: "Team retro" },
    ],
  },
  {
    label: "This week",
    cards: [
      {
        title: "Usability test",
        description: "Research questions with Carina.",
        avatars: [avatar(1), avatar(2)],
        labels: [{ text: "Research", tone: "pink" }],
      },
    ],
  },
  {
    label: "Next week",
    cards: [
      {
        title: "Culture workshop",
        description: "Let’s build a great team.",
        avatars: [avatar(3)],
        labels: [{ text: "Due 24/11", tone: "pink" }],
      },
    ],
  },
];
