import csv
from os import name, read


import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate('firebase-python.json')
firebase_admin.initialize_app(cred)
db = firestore.client()


def parseCSVUploadToFirebase():
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
            location = firestore.firestore.GeoPoint(float(row['Latitude']), float(row['Longitude']))

            doc_ref = db.collection('schools').document(row['LocID'])
            doc_ref.set({
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


if __name__ == '__main__':
    parseCSVUploadToFirebase()
