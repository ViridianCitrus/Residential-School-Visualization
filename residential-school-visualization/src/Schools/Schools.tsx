import { useEffect, useState } from 'react';



export function Schools() {
  interface GeoPoint {
    latitude: number,
    longitude: number
  }

  interface School {
    buildingStatus: string,
    indigenousCommunity: string,
    location: GeoPoint,
    name: string,
    nameAlternate: Array<String>,
    photoSource: string,
    photoTitle: string,
    photoUrl: string,
    province: string,
    religiousAffiliation: string,
    yearEnd: number,
    yearStart: number
  }


  const [schoolData, setSchoolData] = useState<Array<School>>([]);

  useEffect(() => {
    const json = require('./schools.json');
    const schools: Array<School> = json.schools;
    setSchoolData(prevData => ([...schools]));
  }, []);

  //         setSchoolData((prevData) => ([...prevData,
  //             {
  //             buildingStatus: doc.get("buildingStatus"),
  //             indigenousCommunity: doc.get("indigenousCommunity"),
  //             location: doc.get("location"),
  //             name: doc.get("name"),
  //             nameAlternate: doc.get("nameAlternate"),
  //             photoSource: doc.get("photoSource"),
  //             photoTitle: doc.get("photoTitle"),
  //             photoUrl: doc.get("photoUrl"),
  //             province: doc.get("province"),
  //             religiousAffiliation: doc.get("religiousAffiliation"),
  //             yearEnd: doc.get("yearEnd"),
  //             yearStart: doc.get("yearStart")

  // this just returns a list of names but you can use schoolData and return a list of whatever attribute you need :)
  return (
    <div>
      {
        schoolData.map((sch, idx) => {
          return (<li key={idx}>{sch.name}</li>)
        })
      }
    </div>
  )

}