Front end gemaakt met react
Back end gemaakt met php rest api

Installatie
1. Database
Start Apache en MySQL in het XAMPP Control Panel.
Open http://localhost/phpmyadmin.
Maak een database dreamdestinations aan met collatie utf8mb4_general_ci.
Maak de tabel aan (het aangeleverde .sql-bestand bevat alleen de data, geen tabelstructuur):

CREATE TABLE `destinations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(100) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `number_of_bookings` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
Importeer destinations.sql via het tabblad Importeren.
2. API
Kopieer de map dreamdestinations-api naar C:\xampp\htdocs\.
Controleer of de API werkt: http://localhost/dreamdestinations-api/destinations.php Deze moet een JSON-lijst met zes bestemmingen teruggeven.


3. Front-end
bash
cd dreamdestinations
npm install
npm run dev

Open daarna http://localhost:5173.
