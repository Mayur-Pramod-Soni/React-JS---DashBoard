import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            unde obcaecati laborum consequuntur. Aliquid nisi distinctio ipsum
            consequatur et laudantium numquam unde assumenda dolores nostrum
            non, eos beatae molestiae, aspernatur incidunt dolorum excepturi in!
            Exercitationem, reiciendis, similique dolores quia esse distinctio
            dolorum debitis perspiciatis nemo, eius veritatis nobis nulla optio?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            unde obcaecati laborum consequuntur. Aliquid nisi distinctio ipsum
            consequatur et laudantium numquam unde assumenda dolores nostrum
            non, eos beatae molestiae, aspernatur incidunt dolorum excepturi in!
            Exercitationem, reiciendis, similique dolores quia esse distinctio
            dolorum debitis perspiciatis nemo, eius veritatis nobis nulla optio?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Most Asked Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            unde obcaecati laborum consequuntur. Aliquid nisi distinctio ipsum
            consequatur et laudantium numquam unde assumenda dolores nostrum
            non, eos beatae molestiae, aspernatur incidunt dolorum excepturi in!
            Exercitationem, reiciendis, similique dolores quia esse distinctio
            dolorum debitis perspiciatis nemo, eius veritatis nobis nulla optio?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Frequently Asked Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            unde obcaecati laborum consequuntur. Aliquid nisi distinctio ipsum
            consequatur et laudantium numquam unde assumenda dolores nostrum
            non, eos beatae molestiae, aspernatur incidunt dolorum excepturi in!
            Exercitationem, reiciendis, similique dolores quia esse distinctio
            dolorum debitis perspiciatis nemo, eius veritatis nobis nulla optio?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ ;