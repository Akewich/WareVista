import SortIcon from "@mui/icons-material/Sort";
import SouthIcon from "@mui/icons-material/South";
import SearchIcon from "@mui/icons-material/Search";
import "./Leftbar.scss";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  marginRight: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    MarginRight: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {},
    },
  },
}));

const Leftbar = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <section className="sideDesign">
        <div className="tool d-flex">
          <Button
            variant="outlined"
            sx={{
              flexGrow: 1,
              background: "#535353",
              borderRadius: "5px",
              width: 175,
              color: "white",
              borderColor: "black",
            }}
          >
            Elements
          </Button>
          <Button
            variant="outlined"
            sx={{
              flexGrow: 1,
              background: "#535353",
              borderRadius: "5px",
              width: 175,
              color: "white",
              borderColor: "black",
            }}
          >
            Library
          </Button>
        </div>
        <div className="search">
          <Box
            sx={{
              flexGrow: 1,
              background: "#717171",
              borderRadius: "5px",
            }}
            width={255}
            height={60}
          >
            <Toolbar>
              <Search
                sx={{
                  borderRadius: "5px",
                  background: "#ABABAB",
                  color: "#fff",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#fff", fontSize: 20 }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    color: "#fff",
                  }}
                />
              </Search>
              <div className="sorting  d-flex">
                <IconButton sx={{ color: "white" }}>
                  <SortIcon sx={{ color: "#fff", fontSize: 20 }} />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <SouthIcon sx={{ color: "#fff", fontSize: 20 }} />
                </IconButton>
              </div>
            </Toolbar>
          </Box>
        </div>
        <div className="list">
          <List>
            <ListItemButton sx={{ color: "white" }} onClick={handleClickOpen}>
              <ListItemIcon>
                <FolderOpenIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Box1" sx={{ color: "white" }} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 10 }}>
                  <ListItemIcon>
                    <InsertDriveFileIcon sx={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Box1.1" sx={{ color: "white" }} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 10 }}>
                  <ListItemIcon>
                    <InsertDriveFileIcon sx={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Box1.2" sx={{ color: "white" }} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 10 }}>
                  <ListItemIcon>
                    <InsertDriveFileIcon sx={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Box1.3" sx={{ color: "white" }} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </div>
      </section>
    </>
  );
};

export default Leftbar;
