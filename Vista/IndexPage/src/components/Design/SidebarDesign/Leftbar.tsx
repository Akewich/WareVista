import SortIcon from "@mui/icons-material/Sort";
import SouthIcon from "@mui/icons-material/South";
import SearchIcon from "@mui/icons-material/Search";
import "./Leftbar.scss";
import {
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
import FolderIcon from "@mui/icons-material/Folder";
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
    <section className="sideDesign">
      <div className="search">
        <Toolbar>
          <Search
            sx={{ borderRadius: "50px", background: "#ABABAB", color: "#000" }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{
                borderRadius: "50px",
                color: "#000",
              }}
            />
          </Search>
          <div className="sorting ms-5 d-flex">
            <IconButton>
              <SortIcon />
            </IconButton>
            <IconButton>
              <SouthIcon />
            </IconButton>
          </div>
        </Toolbar>
      </div>
      <List>
        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText secondary="Box1" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText secondary="Box1.1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText secondary="Box1.2" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText secondary="Box1.3" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText secondary="Box2" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText secondary="Box2.1" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText secondary="Box2.2" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 10 }}>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText secondary="Box2.3" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </section>
  );
};

export default Leftbar;
