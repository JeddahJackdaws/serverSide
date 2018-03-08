
# Using the API

This is a guide to use the betterdoctor API.

There is two types of collections:
- Doctors
- Hospitals

To get all the data inside the doctors collection:

```

localhost:3000/doctors

```
The returned string should be like:
```

{
    "_id": {
        "$oid": "5a9315569a44db14e0b4b658"
    },
    "name": "د. ايمن السيد",
    "speciality": "استشاري تخدير",
    "hospital": "Dr. Erfan & Bagedo general hospital",
    "rank": "",
    "totalReviews": 0,
    "dateFound": 1518677645569,
    "city": "Jeddah",
    "province": "Makkah"
}

```
If you want to search for a doctor's name:

```

localhost:3000/doctors?name=محمد

``` 

Or you could use:

```

GET /doctors/name/محمد

```