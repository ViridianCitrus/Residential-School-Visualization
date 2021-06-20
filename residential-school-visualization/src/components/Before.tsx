import React from "react";
import { getSchools, School } from "../Schools/Schools";
import { Slider } from "@material-ui/core";
import { Map } from "../Map";
import { Container, Grid, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function SchoolData() {
  return (
    <>
      <Container>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={3}>
            <h2 className="during-page">Before Residential Schools</h2>
          </Grid>
          <Grid item>
            <Button variant="text" style={{ padding: 0, width: "20px" }}>
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>

        <p className="during-page">
          The first steps leading to the creation of residential schools were
          established as early as the 1600’s by European settlers, mostly
          Catholic priests and nuns, who believed Indigenous Peoples to be
          “uncivilized”. Efforts have been made by numerous institutions -
          Anglican, Methodist, and Roman Catholic - to assimilate Indigenous
          Peoples, particularly children, into their culture to “educate” them.
        </p>

        <p className="during-page">
          In the 1830’s, residentials schools started to be integrated into
          government and church policies as more religious institutions were
          created in Ontario. It would not be until the 1880’s though when
          residential schools officially began operating. In 1883, authorized by
          Sir John A. Macdonald, the federal government began funding the
          creation of these schools across Canada.
        </p>

        <p className="during-page">
          In 1920, the Indian Act was implemented, which declared it mandatory
          for every Indigenous child to attend a residential school, thus
          forcing them to abandon their language, culture, and family.
        </p>
      </Container>
    </>
  );
}

export default SchoolData;
