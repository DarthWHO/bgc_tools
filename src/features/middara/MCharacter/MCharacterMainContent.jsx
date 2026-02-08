import { Grid, Typography, Stack, Icon } from "@mui/material";
import { useState } from "react";
import MCharacterMainTextBox from "./MCharacterMainTextBox";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IconProvider from "../svgComponents/IconProvider";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MCharacterMainContent = () => {
  // const count = 8;
  // const mainComponents = Array.from({ length: count }).map((_, index) => (
  //   <MCharacterMainTextBox key={index} index={index} />
  // ));
  // return (
  //   <Grid container spacing={1} sx={{ height: "100%", padding: 1 }}>
  //     {mainComponents}
  //   </Grid>
  // );

  const [mainExpanded, setMainExpanded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    if (panel === "panel0") {
      setMainExpanded(isExpanded ? panel : false);
    }
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={mainExpanded === "panel0"}
        onChange={handleChange("panel0")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel0bh-content"
          id="panel0bh-header"
        >
          <Typography
            component="span"
            sx={{ width: "100%", flexShrink: 0, textAlign: "center" }}
          >
            Expand
          </Typography>
          <Typography
            component="span"
            sx={{ color: "text.secondary" }}
          ></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When my turn starts
              </Typography>
              <Typography
                component="span"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When I want to move
              </Typography>
              <Typography
                component="span"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When I roll conviction
              </Typography>
              <Typography
                component="span"
                sx={{ color: "text.secondary" }}
              ></Typography>
              <Typography component="span" sx={{ color: "text.secondary" }}>
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#800080"}
                  width={24}
                  height={24}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#800080"}
                  width={24}
                  height={24}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#000000"}
                  width={24}
                  height={24}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When I cast a spell
              </Typography>
              <Typography component="span" sx={{ color: "text.secondary" }}>
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#800080"}
                  width={24}
                  height={24}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#800080"}
                  width={24}
                  height={24}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#000000"}
                  width={24}
                  height={24}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When I am attacked
              </Typography>
              <Typography
                component="span"
                sx={{ color: "text.secondary" }}
              ></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel3bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When I attack
              </Typography>
              <Typography component="span" sx={{ color: "text.secondary" }}>
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#800080"}
                  width={24}
                  height={24}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#800080"}
                  width={24}
                  height={24}
                />
                <IconProvider
                  icon="CubeWhite"
                  fillColour={"#000000"}
                  width={24}
                  height={24}
                />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                When I hit
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
            >
              <Typography component="span" sx={{ width: "50%", flexShrink: 0 }}>
                Other
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MCharacterMainContent;
