import React from "react";
import { getSchools, School } from "../Schools/Schools";
import { Slider } from "@material-ui/core";
import { Map } from "../Map";
import { Container, Grid, Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

function SchoolData() {
  const [yearValue, setYearValue] = React.useState<number | number[]>(1900);

  const [schoolVisible, setSchoolVisible] = React.useState<Array<School>>([]);

  const handleYearChange = (event: any, newValue: number | number[]) => {
    setSchoolVisible(
      allSchools.filter((sch) => {
        return sch.yearStart <= newValue && sch.yearEnd >= newValue
          ? true
          : false;
      })
    );
    setYearValue(newValue);
  };

  const allSchools: Array<School> = getSchools();
  const history = useHistory();
  const handleForward = () => history.push("/history/afterschools");
  const handleBackward = () => history.push("/history/beforeschools");
  return (
    <>
      <Container>
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <Button variant="text" style={{ padding: 0, width: "20px" }}>
              <ArrowBackIcon onClick={handleBackward} />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <h2 className="during-page">During Residential Schools</h2>
          </Grid>
          <Grid item>
            <Button variant="text" style={{ padding: 0, width: "20px" }}>
              <ArrowForwardIcon onClick={handleForward} />
            </Button>
          </Grid>
        </Grid>

        <p className="during-page">
          More schools were built over the years, totalling up to 130 schools
          across the country between 1831 and 1996. Earlier schools were very
          poorly constructed, managed, and funded, with some being prone to
          dangerous and serious incidents such as fires. Education quality was
          very poor since basic curriculum - reading, writing, math, and
          religion - was only taught and most teachers were not qualified to
          teach. Students were also forced to spend most of their time working
          in order to maintain the school buildings and grow food due to
          underfunding.
        </p>

        <p className="during-page">
          Students endured poor living conditions. Many were underfed and became
          sick with diseases such as tuberculosis and influenza. They were
          forbidden from wearing traditional clothing, practicing their family’s
          customs, and speaking and writing in their own language. New names,
          and often just numbers, were assigned to each student. It was sadly
          common for students to be punished by staff by being beaten, locked in
          small spaces, verbally abused, emotionally abused, and sexually
          assaulted.
        </p>

        <p className="during-page">
          Residential schools faced resistance from Indigenous communities
          throughout the years. Despite many residential school survivors
          speaking publicly about the abuse they endured, it was not until the
          late 1980’s that the government began to address them.This did not
          stop residential schools from operating though, for the last
          residential school did not close until 1996.
        </p>
      </Container>

      <div
        style={{
          height: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="map-div">
          <Map schoolVisible={schoolVisible} />
        </div>
      </div>

      <div
        style={{
          height: "1%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Slider
          defaultValue={1900}
          valueLabelDisplay="on"
          value={yearValue}
          min={1900}
          max={2000}
          step={1}
          onChange={handleYearChange}
          style={{
            width: "50%",
            // marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}

export default SchoolData;
