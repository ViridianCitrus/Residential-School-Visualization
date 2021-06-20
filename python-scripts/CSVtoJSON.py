import csv
import json


def CSVtoJSON():
    data = {}
    data['schools'] = []

    with open('IRS_Locations-1.csv') as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row['LocName'].strip()
            alternateNames = []
            for n in row['AltNames'].split(';'):
                if n.strip():
                    alternateNames.append(n.strip())
            startYear = int(row['LocEarlyYR'])
            endYear = int(row['LocLastYR'])
            photoUrl = None
            if row['PhotoURL'].strip() != 'n/a':
                photoURL = row['PhotoURL'].strip()

            photoTitle = None
            if row['PhotoTitle'].strip() != 'n/a':
                photoTitle = row['PhotoTitle'].strip()
            photoSource = None
            if row['PhotoSour'].strip() != 'n/a':
                photoSource = row['PhotoSour'].strip()
            buildingStatus = row['BldgStatus'].strip()
            religiousAffiliation = row['ReligiousA'].strip()
            indigenousCommunity = None
            if row['IndigComm'].strip():
                indigenousCommunity = row['IndigComm'].strip()
            province = row['Province'].strip()
            location = (float(row['Latitude']), float(row['Longitude']))

            data['schools'].append({
                'name': name,
                'nameAlternate': alternateNames,
                'yearStart': startYear,
                'yearEnd': endYear,
                'photoUrl': photoURL,
                'photoTitle': photoTitle,
                'photoSource': photoSource,
                'buildingStatus': buildingStatus,
                'religiousAffiliation': religiousAffiliation,
                'indigenousCommunity': indigenousCommunity,
                'province': province,
                'location': location
            })
        with open('schools.json', 'w') as out:
            json.dump(data, out)


if __name__ == '__main__':
    CSVtoJSON()
