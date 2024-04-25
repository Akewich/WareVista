import React, { useCallback, useRef, useState } from "react";
import "./Designer.scss";
import { Box, IconButton } from "@mui/material";
import { ACTIONS } from "./Constant";
import Crop54Icon from "@mui/icons-material/Crop54";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import { Layer, Rect, Stage } from "react-konva";
import { Line, Rectangle, Scribble } from "./Constant.type";
import { v4 as uuidv4 } from "uuid";

interface DrawProps {}

const SIZE = 700;

export const Designer: React.FC<DrawProps> = React.memo(function Designer({}) {
  const [action, setAction] = useState<ACTIONS>(ACTIONS.SELECT);
  const [scribble, setScribble] = useState<Scribble[]>([]);
  const [rectangle, setRectangle] = useState<Rectangle[]>([]);
  const [line, setLine] = useState<Line[]>([]);
  const [image, setImage] = useState<HTMLImageElement>();
  const [fillColor, setFiilColor] = useState("#000");

  const stageRef = useRef<any>(null);

  const isPaining = useRef(false);
  const currentShapeId = useRef<string>();
  const transformerRef = useRef(false);

  const downloadURI = (uri: string | undefined, name: string) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri || "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExport = useCallback(() => {
    const dataUri = stageRef?.current?.toDataURL({ pixelRatio: 3 });
    downloadURI(dataUri, "image.png");
  }, []);

  function onPointerMove() {
    if (action === ACTIONS.SELECT || !isPaining.current) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();

    switch (action) {
      case ACTIONS.RECTANGLE:
        setRectangle((rectangle) =>
          rectangle.map((rectangle) => {
            if (rectangle.id === currentShapeId.current) {
              return {
                ...rectangle,
                width: x - rectangle.x,
                height: y - rectangle.y,
              };
            }
            return rectangle;
          })
        );
        break;

      case ACTIONS.SCRIBBLE:
        setScribble((scribble) =>
          scribble.map((scribble) => {
            if (scribble.id === currentShapeId.current) {
              return {
                ...scribble,
                points: [...scribble.points, x, y],
              };
            }
            return scribble;
          })
        );
        break;
    }
  }

  function onPointerDown() {
    if (action === ACTIONS.SELECT) return;
    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();
    const id = uuidv4();
    currentShapeId.current = id;
    isPaining.current = true;

    switch (action) {
      case ACTIONS.RECTANGLE:
        setRectangle((rectangle): any => [
          ...rectangle,
          {
            id,
            x,
            y,
            height: 20,
            width: 20,
            fillColor,
          },
        ]);
        break;

      case ACTIONS.SCRIBBLE:
        setScribble((scribble): any => [
          ...scribble,
          {
            id,
            points: [x, y],
          },
        ]);
        break;
    }
  }

  function onPointerUp() {
    isPaining.current = false;
  }

  function onClick(e: any) {
    if (action !== ACTIONS.SELECT) return;
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
  }
  return (
    <div>
      <div className="imgScale">
        <div className="itemPick">
          <Box
            sx={{
              flexGrow: 1,
              borderRadius: "5px",
              border: "1px solid black",
              p: 1,
            }}
            width={SIZE}
          >
            {/* Color Picker */}
            <IconButton>
              <input
                className="pickerColor "
                type="color"
                value={fillColor}
                onChange={(e) => setFiilColor(e.target.value)}
              />
            </IconButton>

            {/* Draw Rectangle */}
            <IconButton
              className={
                action === ACTIONS.RECTANGLE ? "bg-primary" : "hover:bg-primary"
              }
              onClick={() => setAction(ACTIONS.RECTANGLE)}
            >
              <Crop54Icon sx={{ color: "black" }} />
            </IconButton>

            {/* Crop Image */}
            <IconButton
              className={
                action === ACTIONS.SELECT ? "bg-primary" : "hover:bg-primary"
              }
              onClick={() => setAction(ACTIONS.SELECT)}
            >
              <NorthWestIcon sx={{ color: "black" }} />
            </IconButton>

            {/* Drawing simple */}
            <IconButton
              className={
                action === ACTIONS.SCRIBBLE ? "bg-primary" : "hover:bg-primary"
              }
              onClick={() => setAction(ACTIONS.SCRIBBLE)}
            >
              <ModeEditIcon sx={{ color: "black" }} />
            </IconButton>

            {/* Fill Color */}
            <IconButton>
              <FormatColorFillIcon sx={{ color: "black" }} />
            </IconButton>

            {/* Eraser */}
            <IconButton>
              <AutoFixNormalIcon sx={{ color: "black" }} />
            </IconButton>

            {/* export */}
            <IconButton className="hover:bg-primary" onClick={handleExport}>
              <CloudUploadIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </div>
        <Stage
          ref={stageRef}
          height={SIZE}
          width={SIZE}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <Layer>
            {rectangle.map((rectangle) => (
              <Rect
                key={rectangle.id}
                x={rectangle.x}
                y={rectangle.y}
                strike={rectangle.color}
                height={rectangle?.height}
                width={rectangle?.width}
                onClick={() => {
                  transformerRef.current.nodes([]);
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
});
