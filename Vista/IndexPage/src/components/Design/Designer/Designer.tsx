import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Designer.scss";
import { Box, IconButton } from "@mui/material";
import { ACTIONS } from "./Constant";
import Crop54Icon from "@mui/icons-material/Crop54";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ClearIcon from '@mui/icons-material/Clear';
import { Layer, Line, Rect , Stage, Transformer } from "react-konva";
import {  Lines, Rectangle, Scribble } from "./Constant.type";
import { v4 as uuidv4 } from "uuid";

interface DrawProps {}

const SIZE = 700;

export const Designer: React.FC<DrawProps> = React.memo(function Designer({}) {
  const [action, setAction] = useState<ACTIONS>(ACTIONS.SELECT);
  const [scribble, setScribble] = useState<Scribble[]>([]);
  const [rectangle, setRectangle] = useState<Rectangle[]>([]);
  const [fillColor, setFiilColor] = useState("#ff0000");
  const [lines, setLines] = useState<Lines[]>([])
  const [undo, setUndo] = useState([])
  const [redo, setRedo] = useState([])

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Load position from localStorage on component mount
  useEffect(() => {
    const storedPosition = localStorage.getItem('blockPosition');
    if (storedPosition) {
      setPosition(JSON.parse(storedPosition));
    }
  }, []);

  // Update localStorage when position changes
  useEffect(() => {
    localStorage.setItem('blockPosition', JSON.stringify(position));
  }, [position]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const newPosition = {
          x: e.clientX - offset.x,
          y: e.clientY - offset.y
        };
        console.log('New Position:', newPosition);
        setPosition(newPosition);
      }
    };
    const handleMouseUp = () => {
      setDragging(false);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, offset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection while dragging
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };



  let history = [
    {
      x: 0,
      y: 0,
    }
  ]

  let historyStep = 0;
  const state = {
    position: history[0]
  }
  const handleUndo = (e:any) => {
    if (historyStep === 0) {
      return;
    }
    historyStep -= 1;
    const previous = history[historyStep];
    e.setState({
      position: previous
    })
  }

  const handleRedo = (e:any) => {
    if(historyStep === history.length - 1) {
      return;
    }
    historyStep += 1;
    const next = history[historyStep]
    e.setState({
      position: next,
    })
  }

  const handleDragEnd = (e:any) => {
    history = history.slice(0, historyStep + 1);
    const pos = {
      x: e.target.x(),
      y: e.target.y()
    };
    history = history.concat([pos])
    historyStep += 1;
    e.setState({
      position: pos,
    });
  }
  
  const storkeColor = "#000";

  const stageRef = useRef<any>(null);

  const isPaining = useRef(false);
  const currentShapeId = useRef<string>();
  const transformerRef = useRef<any>(null);

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

      case ACTIONS.LINE:
        setLines((lines): any => [
          ...lines,
          {
            id,
            points: [x ,y, x + 20, y + 20],
            fillColor
          }
        ])
        break;
    }
  }

  function onPointerUp() {
    isPaining.current = false;
  }

  // const onShapeClick = useCallback(
  //   (e: KonvaEventObject<MouseEvent>) => {
  //     if (action !== ACTIONS.SELECT ) return;
  //     const currentTarget = e.currentTarget
  //     transformerRef?.current.node(currentTarget)
  //   },
  //   [action]
  // );

  const onClear = useCallback(() => {
    setRectangle([]);
    setScribble([])
    setLines([])
  }, [])

  function onClick(e: any) {
    if (action !== ACTIONS.SELECT) return;
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
  }

  const isDraggable = action === ACTIONS.SELECT;
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

            <IconButton onClick={handleUndo}>
              
              <UndoIcon />
            </IconButton>

            <IconButton onClick={handleRedo}>
              {/* className = {
                action === ACTIONS.
              } */}
              <RedoIcon />
            </IconButton>

            {/* Color Picker */}
            <IconButton>
              <input
                className="pickerColor "
                type="color"
                value={fillColor}
                onChange={(e) => setFiilColor(e.target.value)}
              />
            </IconButton>
            {/* Select */}
            <IconButton
              className={
                action === ACTIONS.SELECT ? "bg-primary" : "hover:bg-primary"
              }
              onClick={() => setAction(ACTIONS.SELECT)}
            >
              <NorthWestIcon sx={{ color: "black" }} />
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
            {/* <IconButton 
            className={
              action === ACTIONS.LINE ? "bg-primary" : "hover:bg-primary"}
              onClick = {() => setAction(ACTIONS.LINE)}
            >
              <RemoveIcon sx={{ color: "black" }} />
            </IconButton> */}

            {/* Eraser */}
            {/* <IconButton>
              <AutoFixNormalIcon sx={{ color: "black" }} />
            </IconButton> */}

            <IconButton className="hover:bg-primary" onClick={onClear}>
              <ClearIcon sx={{color: 'black'}} />
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
              <Rect
                x={0}
                y={0}
                height={SIZE}
                width={SIZE}
                fill="white"
                id="bg"
                onClick={() => {
                  transformerRef.current.nodes([])
                }}
              />
              {rectangle.map((rectangle) => (

                <Rect
                  key={rectangle.id}
                  x={rectangle.x}
                  y={rectangle.y}
                  stroke={storkeColor}
                  strokeWidth={2}
                  fill={rectangle.fillColor}
                  height={rectangle.height}
                  width={rectangle.width}
                  draggable={isDraggable}
                  onClick={onClick}
                  onDragEnd={handleDragEnd}
                   />
              ))}
              {scribble.map((scribble) => (
                <Line 
                key={scribble.id}
                lineCap="round"
                lineJoin="round"
                points={scribble.points}
                stroke={storkeColor}
                strokeWidth={2}
                fill={scribble.color}
                draggable={isDraggable}
                onClick={onClick}
                 />
              ))}
              <Transformer ref={transformerRef} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
});
