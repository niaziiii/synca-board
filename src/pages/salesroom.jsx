import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Box,
  Typography,
  Avatar,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
// import { EditorState, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomTable from "./../components/shared/listingTable";
import AddSectionModal from "./../components/shared/addSectionModal";
import EditIcon from "@mui/icons-material/Edit";
import { getPageById } from "./../pagesAPI";
import FullFeaturedCrudGrid from "./../components/shared/checkbox";
import LinkCard from "./../components/shared/linkCard";
import FileCard from "./../components/shared/fileCard";
import { useLocation, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const DynamicEditor = dynamic(
//   () => import("react-draft-wysiwyg").then((module) => module.Editor),
//   { ssr: false }
// );
const stakeHolderHeader = ["Header 1", "Header 2", "Header 3", "Header 4"];
const acceptanceHeader = [
  "Customer Challenges",
  "Impact of challengeg",
  "Solutions and Outcomes",
];

const stakeHolderdata = Array.from({ length: 4 }, (_, index) => {
  return [
    `Row ${index + 1}, Cell 1`,
    `Row ${index + 1}, Cell 2`,
    `Row ${index + 1}, Cell 3`,
    `Row ${index + 1}, Cell 4`,
  ];
});
const acceptanceData = Array.from({ length: 3 }, (_, index) => {
  return [
    `» Challenge that your prospect is currently facing`,
    `» The impact of the challenge to your prospects business`,
    ` » How your prospect will achieve success with your solution`,
  ];
});
const TextSection = ({ addNewElement, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(content?.text || "");

  const handleTextChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={addNewElement}
      />
      <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h4" fontWeight={600} contentEditable>
            Introduction
          </Typography>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
        <Divider />
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
        <Paper sx={{ borderRadius: 0 }}>
          <Typography
            variant="body1"
            fontWeight={600}
            padding={2}
            contentEditable
            width={"fit-content"}
          >
            Welcome!
          </Typography>
          {/* <DynamicEditor
            editorState={editorState}
            toolbarClassName="toolbar-class"
            wrapperClassName="custom-wrapper-class"
            editorClassName="custom-editor-class"
            onEditorStateChange={onEditorStateChange}
          /> */}
          <ReactQuill
            value={value}
            onChange={handleTextChange}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ size: [] }],
                [{ font: [] }],
                [{ align: ["right", "center", "justify"] }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                [{ color: ["red", "#785412"] }],
                [{ background: ["red", "#785412"] }],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "link",
              "color",
              "image",
              "background",
              "align",
              "size",
              "font",
            ]}
          />
        </Paper>
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
        <Button
          startIcon={<AddIcon />}
          sx={{ color: "#0036C7", fontSize: 16 }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Section
        </Button>
      </Grid>
    </>
  );
};
const TableSection = ({ addNewElement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={addNewElement}
      />
      <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          contentEditable
          width={"fit-content"}
        >
          Add Title
        </Typography>
        <Divider />
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={{ py: 1, background: "#FFF", padding: 3 }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            contentEditable
            width={"fit-content"}
            sx={{ outline: "none" }}
          >
            Add Title
          </Typography>
        </Grid>
        <CustomTable headers={acceptanceHeader} data={acceptanceData} />
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
        <Button
          startIcon={<AddIcon />}
          sx={{ color: "#0036C7", fontSize: 16 }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Section
        </Button>
      </Grid>
    </>
  );
};
const NextStepSection = ({ addNewElement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={addNewElement}
      />
      <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          contentEditable
          width={"fit-content"}
        >
          Add Title
        </Typography>
        <Divider />
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={{ py: 1, background: "#FFF", padding: 3 }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            contentEditable
            width={"fit-content"}
            sx={{ outline: "none" }}
          >
            Add Title
          </Typography>
        </Grid>
        <FullFeaturedCrudGrid />
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
        <Button
          startIcon={<AddIcon />}
          sx={{ color: "#0036C7", fontSize: 16 }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Section
        </Button>
      </Grid>
    </>
  );
};
const LinkSection = ({ addNewElement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={addNewElement}
      />
      <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          contentEditable
          width={"fit-content"}
        >
          Add Title
        </Typography>
        <Divider />
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={{ py: 1, background: "#FFF", padding: 3 }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            contentEditable
            width={"fit-content"}
            sx={{ outline: "none" }}
          >
            Add Title
          </Typography>
        </Grid>
        <Box display={"flex"} justifyContent={"space-around"} py={2}>
          <LinkCard />
          <LinkCard />
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
        <Button
          startIcon={<AddIcon />}
          sx={{ color: "#0036C7", fontSize: 16 }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Section
        </Button>
      </Grid>
    </>
  );
};
const FileSection = ({ addNewElement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={addNewElement}
      />
      <Grid item lg={12} md={12} sm={12} sx={{ mx: 3 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          contentEditable
          width={"fit-content"}
        >
          Add Title
        </Typography>
        <Divider />
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          sx={{ py: 1, background: "#FFF", padding: 3 }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            contentEditable
            width={"fit-content"}
            sx={{ outline: "none" }}
          >
            Add Title
          </Typography>
        </Grid>
        <Box display={"flex"} justifyContent={"space-around"} py={2}>
          <FileCard />
          <FileCard />
        </Box>
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
        <Button
          startIcon={<AddIcon />}
          sx={{ color: "#0036C7", fontSize: 16 }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Section
        </Button>
      </Grid>
    </>
  );
};

const SalesRoom = () => {
  const { id } = useParams();
  console.log(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/static/images/avatar/1.jpg");
  const [elements, setElements] = useState([]);

  const addNewElement = (element) => {
    const newElements = [...elements, element];
    setElements(newElements);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const fetchData = async () => {
    if (id) {
      try {
        const pageData = await getPageById(id);
        setElements(pageData?.elements || []);
        console.log("Page Data", pageData);
        // Assuming the response contains the 'elements' field
      } catch (error) {
        console.error("Error fetching page:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Container>
      <AddSectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addNewElement={addNewElement}
      />
      <Grid container mb={10}>
        <Grid item lg={12} md={12} sm={12}>
          <Paper sx={{ borderRadius: 0, position: "relative" }}>
            <Box
              sx={{ width: "100%", backgroundColor: "black", color: "#FFF" }}
            >
              <Box paddingLeft={14} paddingY={3}>
                <Typography
                  variant="h3"
                  contentEditable
                  onInput={(e) => console.log(e.currentTarget.textContent)}
                >
                  Sales Room
                </Typography>
                <Typography contentEditable>Client Company name</Typography>
              </Box>
            </Box>
            <label htmlFor="image-upload">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <Avatar
                alt="Remy Sharp"
                src={imageSrc}
                sx={{
                  width: 54,
                  height: 54,
                  position: "absolute",
                  left: 36,
                  bottom: 25,
                  cursor: "pointer",
                }}
              >
                <EditIcon sx={{ zIndex: 10 }} />
              </Avatar>
            </label>
            <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
              <Box
                display={"flex"}
                alignItems={"end"}
                paddingLeft={14}
                paddingY={1}
              >
                <Typography variant="h6">Your Name</Typography>
                <Typography variant="h6" marginLeft={4}>
                  Your Role
                </Typography>
                <Typography
                  variant="body1"
                  marginLeft={4}
                  sx={{ textDecoration: "underline" }}
                >
                  carollinemirandaf@gmail.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center", py: 1 }}>
          <Button
            startIcon={<AddIcon />}
            sx={{ color: "#0036C7", fontSize: 16 }}
            onClick={() => setIsModalOpen(true)}
          >
            Add Section
          </Button>
        </Grid>
        {elements.map((element) => {
          switch (element.type) {
            case "text":
              return (
                <>
                  <TextSection
                    addNewElement={addNewElement}
                    content={element.content}
                  />
                </>
              );
            case "table":
              return (
                <>
                  <TableSection addNewElement={addNewElement} />
                </>
              );
            case "checkbox":
              return (
                <>
                  <NextStepSection addNewElement={addNewElement} />
                </>
              );
            case "link":
              return (
                <>
                  <LinkSection addNewElement={addNewElement} />
                </>
              );
            case "price":
              return <></>;
            case "file":
              return (
                <>
                  <FileSection addNewElement={addNewElement} />
                </>
              );
            default:
              return null;
          }
        })}
      </Grid>
    </Container>
  );
};

export default SalesRoom;
