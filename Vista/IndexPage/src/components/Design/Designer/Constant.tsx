import { ArrowsMove, ArrowUpLeft, Pencil, Square } from "react-bootstrap-icons";

export enum ACTIONS {
  SELECT = "SELECT",
  RECTANGLE = "RECTANGLE",
  SCRIBBLE = "SCRIBBLE",
  LINE = "LINE",
}

export const ITEMS_OPTION = [
  {
    id: ACTIONS.SELECT,
    label: "Select Items",
    icon: <ArrowUpLeft />,
  },
  {
    id: ACTIONS.RECTANGLE,
    label: "Draw Rectangle",
    icon: <Square />,
  },
  {
    id: ACTIONS.SCRIBBLE,
    label: "Scribble",
    icon: <Pencil />,
  },
];
