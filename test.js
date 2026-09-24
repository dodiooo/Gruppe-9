const fs = require("fs");

// CSV-Datei einlesen
const data = fs.readFileSync("Fahrrad.csv", "utf8");

// Zeilen trennen
const lines = data.trim().split("\n");

// Erste Zeile enthält die Überschriften
const headers = lines[0].split(";");

// Die einzelnen Fahrräder erstellen
const bicycles = lines.slice(1).map(line => {
    const values = line.split(";");

    return {
        "Bike-ID": values[0],
        "Modell": values[1],
        "Typ": values[2],
        "Farbe": values[3],
        "Status": values[4]
    };
});

// Fahrräder als einzelne Objekte anzeigen
bicycles.forEach((bike, index) => {
    console.log(`Fahrrad ${index + 1}:`);
    console.log(bike);
    console.log("--------------------");
});