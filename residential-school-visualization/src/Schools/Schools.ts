import { useEffect, useState } from 'react';

export interface School {
  buildingStatus: string,
  indigenousCommunity: string,
  location: Array<number>,
  name: string,
  nameAlternate: Array<string>,
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