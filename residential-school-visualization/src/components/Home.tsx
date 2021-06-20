import React from "react";
import Grid from "@material-ui/core/Grid";
import rs1 from "../img/RS1.jpg";

export const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* <header className="Home-header">
        <p>
          Residential School Visualization
        </p>
      </header> */}
      <body>
        <p
          style={{
            fontSize: "40px",
          }}
        >
          Let's learn about residential schools
        </p>
        <Grid container>
          <Grid item xs={5}>
            <img src={rs1} className="photo" />
          </Grid>
          <Grid item xs={5}>
            First opened in 1831, residential schools were one of Canada's
            darkest moments in history. These schools were used as a tool for
            Canada's plan of "aggressive assimilation" and colonization of
            Indigenous Peoples and territories in Canada. Indigenous children
            were removed from their families, and forced to remove their culture
            and traditions. With the closure of the last school in 1996, these
            schools have seen upwards of 150,000 students enrolled.
          </Grid>
        </Grid>
      </body>
    </div>
  );
};
