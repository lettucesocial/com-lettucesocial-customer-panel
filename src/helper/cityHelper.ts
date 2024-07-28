import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class CityHelper
	{
        validCityList: string[]=[
            "Agoura Hills",
            "Anaheim",
            "Bakersfield",
            "Beverly Hills",
            "Buena Park",
            "Burbank",
            "Calabasas",
            "Camarillo",
            "Canoga Park",
            "Carlsbad",
            "Carson",
            "Chatsworth",
            "Chino Hills",
            "Corona",
            "Culver City",
            "Cypress",
            "Dana Point",
            "Downey",
            "Encino",
            "Gardena",
            "Glendale",
            "Glendora",
            "Goleta",
            "Hawthorne",
            "Hollywood",
            "Indio",
            "Inglewood",
            "Kailua Kona",
            "La Jolla",
            "La Puente",
            "Larkspur",
            "Loma Linda",
            "Lomita",
            "Long Beach",
            "Los Angeles",
            "Malibu",
            "Manhattan Beach",
            "Marina Del Rey",
            "Mira Loma",
            "Mission Hills",
            "Monterey Park",
            "Moorpark",
            "Newbury Park",
            "North Hollywood",
            "Northridge",
            "Oak Park",
            "Ojai",
            "Oxnard",
            "Pacoima",
            "Pasadena",
            "Playa Del Rey",
            "Pomona",
            "Port Hueneme",
            "Rancho Cucamonga",
            "Rancho Santa Fe",
            "Reseda",
            "Rowland Heights",
            "San Diego",
            "San Francisco",
            "San Marino",
            "San Mateo",
            "San Pedro",
            "Santa Clara",
            "Santa Clarita",
            "Santa Fe Springs",
            "Santa Monica",
            "Santa Paula",
            "Santee",
            "Sherman Oaks",
            "Simi Valley",
            "Stanton",
            "Studio City",
            "Sylmar",
            "Tarzana",
            "Thousand Oaks",
            "Torrance",
            "Tujunga",
            "Ukiah",
            "Valley Village",
            "Van Nuys",
            "Venice",
            "Ventura",
            "Ventura ",
            "Victorville",
            "West Hills",
            "West Hollywood",
            "Westlake Village",
            "Whittier",
            "Woodland Hills",
            ];

        isValid
        (
            cityName:string
        ):boolean
            {
                if
                (
                    this.validCityList.includes(cityName)
                )
                    {
                        return true;
                    }
                else
                    {
                        return false;
                    }
            }
    }