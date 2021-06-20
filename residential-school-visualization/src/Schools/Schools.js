import { useEffect, useState } from 'react';

interface GeoPoint {
  latitude: number,
  longitude: number
}

export interface School {
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

export function getSchools() {
  const json = require('./schools.json');
  const schools: Array<School> = json.schools;
  return (schools);
}