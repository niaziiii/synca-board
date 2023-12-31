import { Box, Button, Card, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import MyCard from "../components/indexPage/card";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import BasicTable from "../components/indexPage/listing";
import ActivePageCard from "../components/indexPage/activePageCard";
import BasicTabs from "../components/indexPage/tabComp";
import { useEffect, useState } from "react";
import { getPagesList } from "../pagesAPI";

export default function HomePage() {
  const [pagesList, setPagesList] = useState();
  const fetchPagesList = async () => {
    try {
      const pagesList = await getPagesList();
      console.log("Pages List:", pagesList);
      if (pagesList) setPagesList(pagesList);
    } catch (error) {
      console.error("Error fetching pages list:", error);
      // Handle the error as needed
    }
  };
  useEffect(() => {
    fetchPagesList();
  }, []);

  var o_options = {
    domain: "synca.outseta.com",
  };
  return (
    <>
      <main>
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginBottom={2}
          >
            <Typography variant="h6">Overview</Typography>
            <Button
              sx={{ fontSize: 14, background: "background" }}
              endIcon={<ExpandMore fontSize="inherit" />}
            >
              This Month
            </Button>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <MyCard
              icon={<SignalCellularAltIcon />}
              background="#2B5CE6"
              title={"Open Room"}
              figure={5}
              description={"vagvx haby jbsdhb"}
            />
            <MyCard
              icon={<LayersOutlinedIcon />}
              background="#1A932E"
              title={"Open Room"}
              figure={2}
              description={"vagvx haby jbsdhb"}
            />
            <MyCard
              icon={<ChecklistIcon />}
              background="#E5AE21"
              title={"Open Room"}
              figure={4}
              description={"vagvx haby jbsdhb"}
            />
            <MyCard
              icon={<ArrowOutwardOutlinedIcon />}
              background="#E65F2B"
              title={"Open Room"}
              figure={"40%"}
              description={"vagvx haby jbsdhb"}
            />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} height={520}>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.34)",
              boxShadow: "none",
              width: "70%",
              borderRadius: "10px",
              padding: 2,
              marginY: 3,
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography sx={{ fontWeight: 700 }}>Sales Rooms</Typography>
              <Box>
                <Button
                  sx={{
                    fontSize: 14,
                    background: "background",
                    marginRight: 1,
                  }}
                  endIcon={<ExpandMore fontSize="inherit" />}
                >
                  Owner
                </Button>
                <Button
                  sx={{
                    fontSize: 14,
                    background: "background",
                    marginRight: 1,
                  }}
                  endIcon={<ExpandMore fontSize="inherit" />}
                >
                  Status
                </Button>
              </Box>
            </Box>
            <Box>
              <BasicTable rowData={pagesList} />
            </Box>
          </Card>
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.34)",
              boxShadow: "none",
              width: "29%",
              borderRadius: "10px",
              padding: 2,
              marginY: 3,
            }}
          >
            <Typography marginBottom={2} sx={{ fontWeight: 700 }}>
              Most active Pages
            </Typography>
            <Box display={"flex"} flexDirection={"column"}>
              <ActivePageCard />
              <ActivePageCard />
              <ActivePageCard />
            </Box>
          </Card>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          height={450}
          marginBottom={2}
        >
          <Card
            sx={{
              background: "rgba(255, 255, 255, 0.34)",
              boxShadow: "none",
              width: "70%",
              borderRadius: "10px",
              padding: 2,
              marginY: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Next Steps</Typography>
            </Box>
            <Box>
              <BasicTabs />
            </Box>
          </Card>
        </Box>
      </main>
    </>
  );
}
