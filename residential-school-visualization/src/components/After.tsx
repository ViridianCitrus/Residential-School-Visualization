import React from "react";
import { Container, Grid, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function SchoolData() {
  return (
    <>
      <Container>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <Button variant="text" style={{ padding: 0, width: "20px" }}>
              <ArrowBackIcon />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <h2 className="during-page">After Residential Schools</h2>
          </Grid>
          <Grid item>
            <Button variant="text" style={{ padding: 0, width: "20px" }}>
              <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>

        <p className="during-page">
          Residential schools systematically undermined First Nations, Métis,
          and Intuit cultures, disrupting many generations of families and
          leading to the loss of language and culture, with one example being
          traditional storytelling; since children were away at residential
          schools, no child could listen and gain cultural knowledge from these
          stories. Children were prevented from learning from their Elders,
          being involved in their community, and developing a healthy
          self-esteem and identity.
        </p>

        <p className="during-page">
          Students did not grow up in a nurturing environment due to being
          removed from their own families for so long, as well as being
          subjected to neglect and abuse by staff. Long-term impact on a
          psychological level includes heightened feelings of anger, anxiety,
          depression, PTSD, and survivor syndrome. Former students also grew up
          without the skills they needed to find a well-paying job and take care
          of their own families. High rates of family and domestic violence,
          substance abuse, and suicides are observed to be linked to residual
          trauma caused by residential schools.
        </p>

        <p className="during-page">
          The Indigenous community has demanded recognition and restitution.
          During the 1990’s, several residential school survivor groups sued the
          federal government and the churches that ran the schools, which was
          known as one of the largest class action suits in Canadian history. As
          a result, the Indian Residential Schools Settlement Agreement was
          established in 2007, paying $1.9 billion in total and implementing
          stating several promises such as funds for healing programs and
          reparition via payment to survivors for all wrongs endured.
        </p>

        <p className="during-page">
          <a href="https://youtu.be/-ryC74bbrEE" target="_blank">
            A formal apology
          </a>{" "}
          was issued by Prime Minister Stephen Harper in 2008.
        </p>
      </Container>
    </>
  );
}

export default SchoolData;
