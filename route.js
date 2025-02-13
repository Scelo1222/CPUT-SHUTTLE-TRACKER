{
    "route"; {
      "routeId"; "string",
      "shuttleId"; "string", // References a shuttle
      "stops"; [
        {
          "stopId": "string",
          "name": "string",
          "latitude": "number",
          "longitude": "number",
          "arrivalTime": "string" // ISO 8601 format
        }
      ]
    }
  }
 