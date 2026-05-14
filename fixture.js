// ============================================================
// FIXTURE MUNDIAL 2026 - DATOS REALES (FASE DE GRUPOS)
// Horarios en hora Argentina (UTC-3)
// ============================================================

const FIXTURE = [
  // ========== GRUPO A: México, Sudáfrica, Corea del Sur, Rep. Checa ==========
  { id: 1,  stage: "Grupo A", group: "A", team1: "México",        team2: "Sudáfrica",     date: "2026-06-11", time: "16:00", venue: "Estadio Azteca, CDMX" },
  { id: 2,  stage: "Grupo A", group: "A", team1: "Corea del Sur", team2: "Rep. Checa",       date: "2026-06-11", time: "23:00", venue: "Guadalajara" },
  { id: 3,  stage: "Grupo A", group: "A", team1: "Rep. Checa",       team2: "Sudáfrica",     date: "2026-06-18", time: "13:00", venue: "Monterrey" },
  { id: 4,  stage: "Grupo A", group: "A", team1: "México",        team2: "Corea del Sur", date: "2026-06-18", time: "22:00", venue: "Estadio Azteca, CDMX" },
  { id: 5,  stage: "Grupo A", group: "A", team1: "Rep. Checa",       team2: "México",        date: "2026-06-24", time: "22:00", venue: "Estadio Azteca, CDMX" },
  { id: 6,  stage: "Grupo A", group: "A", team1: "Sudáfrica",     team2: "Corea del Sur", date: "2026-06-24", time: "22:00", venue: "Guadalajara" },

  // ========== GRUPO B: Canadá, Bosnia, Suiza, Catar ==========
  { id: 7,  stage: "Grupo B", group: "B", team1: "Canadá",                 team2: "Bosnia y Herzegovina", date: "2026-06-12", time: "16:00", venue: "BMO Field, Toronto" },
  { id: 8,  stage: "Grupo B", group: "B", team1: "Catar",                  team2: "Suiza",                date: "2026-06-13", time: "16:00", venue: "Vancouver" },
  { id: 9,  stage: "Grupo B", group: "B", team1: "Suiza",                  team2: "Bosnia y Herzegovina", date: "2026-06-18", time: "16:00", venue: "Vancouver" },
  { id: 10, stage: "Grupo B", group: "B", team1: "Canadá",                 team2: "Catar",                date: "2026-06-18", time: "19:00", venue: "BMO Field, Toronto" },
  { id: 11, stage: "Grupo B", group: "B", team1: "Suiza",                  team2: "Canadá",               date: "2026-06-24", time: "14:00", venue: "BMO Field, Toronto" },
  { id: 12, stage: "Grupo B", group: "B", team1: "Bosnia y Herzegovina",   team2: "Catar",                date: "2026-06-24", time: "16:00", venue: "Vancouver" },

  // ========== GRUPO C: Estados Unidos, Paraguay, Australia, Turquía ==========
  { id: 13, stage: "Grupo C", group: "C", team1: "Estados Unidos", team2: "Paraguay",        date: "2026-06-12", time: "22:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 14, stage: "Grupo C", group: "C", team1: "Australia",      team2: "Turquía",         date: "2026-06-14", time: "01:00", venue: "Seattle" },
  { id: 15, stage: "Grupo C", group: "C", team1: "Estados Unidos", team2: "Australia",       date: "2026-06-19", time: "01:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 16, stage: "Grupo C", group: "C", team1: "Turquía",        team2: "Paraguay",        date: "2026-06-20", time: "14:00", venue: "Seattle" },
  { id: 17, stage: "Grupo C", group: "C", team1: "Turquía",        team2: "Estados Unidos",  date: "2026-06-25", time: "20:00", venue: "Los Angeles" },
  { id: 18, stage: "Grupo C", group: "C", team1: "Paraguay",       team2: "Australia",       date: "2026-06-25", time: "23:00", venue: "Seattle" },

  // ========== GRUPO D: Brasil, Marruecos, Haití, Escocia ==========
  { id: 19, stage: "Grupo D", group: "D", team1: "Brasil",    team2: "Marruecos", date: "2026-06-13", time: "19:00", venue: "MetLife Stadium, NJ" },
  { id: 20, stage: "Grupo D", group: "D", team1: "Haití",     team2: "Escocia",   date: "2026-06-13", time: "22:00", venue: "AT&T Stadium, Dallas" },
  { id: 21, stage: "Grupo D", group: "D", team1: "Escocia",   team2: "Marruecos", date: "2026-06-19", time: "01:00", venue: "AT&T Stadium, Dallas" },
  { id: 22, stage: "Grupo D", group: "D", team1: "Brasil",    team2: "Haití",     date: "2026-06-19", time: "21:30", venue: "MetLife Stadium, NJ" },
  { id: 23, stage: "Grupo D", group: "D", team1: "Escocia",   team2: "Brasil",    date: "2026-06-24", time: "19:00", venue: "MetLife Stadium, NJ" },
  { id: 24, stage: "Grupo D", group: "D", team1: "Marruecos", team2: "Haití",     date: "2026-06-24", time: "20:00", venue: "AT&T Stadium, Dallas" },

  // ========== GRUPO E: Alemania, Curazao, Costa de Marfil, Ecuador ==========
  { id: 25, stage: "Grupo E", group: "E", team1: "Alemania",         team2: "Curazao",          date: "2026-06-14", time: "14:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  { id: 26, stage: "Grupo E", group: "E", team1: "Costa de Marfil",  team2: "Ecuador",          date: "2026-06-14", time: "20:00", venue: "Miami" },
  { id: 27, stage: "Grupo E", group: "E", team1: "Alemania",         team2: "Costa de Marfil",  date: "2026-06-20", time: "17:00", venue: "Atlanta" },
  { id: 28, stage: "Grupo E", group: "E", team1: "Ecuador",          team2: "Curazao",          date: "2026-06-20", time: "20:00", venue: "Miami" },
  { id: 29, stage: "Grupo E", group: "E", team1: "Ecuador",          team2: "Alemania",         date: "2026-06-25", time: "17:00", venue: "Atlanta" },
  { id: 30, stage: "Grupo E", group: "E", team1: "Curazao",          team2: "Costa de Marfil",  date: "2026-06-25", time: "17:00", venue: "Miami" },

  // ========== GRUPO F: Países Bajos, Japón, Suecia, Túnez ==========
  { id: 31, stage: "Grupo F", group: "F", team1: "Países Bajos", team2: "Japón",          date: "2026-06-14", time: "17:00", venue: "NRG Stadium, Houston" },
  { id: 32, stage: "Grupo F", group: "F", team1: "Suecia",       team2: "Túnez",          date: "2026-06-14", time: "23:00", venue: "Kansas City" },
  { id: 33, stage: "Grupo F", group: "F", team1: "Países Bajos", team2: "Suecia",         date: "2026-06-20", time: "14:00", venue: "Houston" },
  { id: 34, stage: "Grupo F", group: "F", team1: "Túnez",        team2: "Japón",          date: "2026-06-21", time: "16:00", venue: "Kansas City" },
  { id: 35, stage: "Grupo F", group: "F", team1: "Túnez",        team2: "Países Bajos",   date: "2026-06-25", time: "19:00", venue: "Houston" },
  { id: 36, stage: "Grupo F", group: "F", team1: "Japón",        team2: "Suecia",         date: "2026-06-25", time: "20:00", venue: "Kansas City" },

  // ========== GRUPO G: España, Cabo Verde, Arabia Saudí, Uruguay ==========
  { id: 37, stage: "Grupo G", group: "G", team1: "España",        team2: "Cabo Verde",    date: "2026-06-15", time: "13:00", venue: "Lincoln Financial Field, Filadelfia" },
  { id: 38, stage: "Grupo G", group: "G", team1: "Arabia Saudí",  team2: "Uruguay",       date: "2026-06-15", time: "19:00", venue: "Boston" },
  { id: 39, stage: "Grupo G", group: "G", team1: "España",        team2: "Arabia Saudí",  date: "2026-06-21", time: "13:00", venue: "Filadelfia" },
  { id: 40, stage: "Grupo G", group: "G", team1: "Uruguay",       team2: "Cabo Verde",    date: "2026-06-21", time: "19:00", venue: "Boston" },
  { id: 41, stage: "Grupo G", group: "G", team1: "Uruguay",       team2: "España",        date: "2026-06-26", time: "19:00", venue: "Filadelfia" },
  { id: 42, stage: "Grupo G", group: "G", team1: "Cabo Verde",    team2: "Arabia Saudí",  date: "2026-06-26", time: "21:00", venue: "Boston" },

  // ========== GRUPO H: Bélgica, Egipto, Irán, Nueva Zelanda ==========
  { id: 43, stage: "Grupo H", group: "H", team1: "Bélgica",         team2: "Egipto",         date: "2026-06-15", time: "16:00", venue: "Levi's Stadium, San Francisco" },
  { id: 44, stage: "Grupo H", group: "H", team1: "Irán",            team2: "Nueva Zelanda",  date: "2026-06-15", time: "22:00", venue: "Cincinnati" },
  { id: 45, stage: "Grupo H", group: "H", team1: "Bélgica",         team2: "Irán",           date: "2026-06-21", time: "16:00", venue: "San Francisco" },
  { id: 46, stage: "Grupo H", group: "H", team1: "Nueva Zelanda",   team2: "Egipto",         date: "2026-06-21", time: "22:00", venue: "Cincinnati" },
  { id: 47, stage: "Grupo H", group: "H", team1: "Nueva Zelanda",   team2: "Bélgica",        date: "2026-06-27", time: "00:00", venue: "San Francisco" },
  { id: 48, stage: "Grupo H", group: "H", team1: "Egipto",          team2: "Irán",           date: "2026-06-27", time: "00:00", venue: "Cincinnati" },

  // ========== GRUPO I: Francia, Senegal, Irak, Noruega ==========
  { id: 49, stage: "Grupo I", group: "I", team1: "Francia",   team2: "Senegal",  date: "2026-06-16", time: "16:00", venue: "AT&T Stadium, Dallas" },
  { id: 50, stage: "Grupo I", group: "I", team1: "Irak",      team2: "Noruega",  date: "2026-06-16", time: "19:00", venue: "Miami" },
  { id: 51, stage: "Grupo I", group: "I", team1: "Francia",   team2: "Irak",     date: "2026-06-22", time: "17:00", venue: "Dallas" },
  { id: 52, stage: "Grupo I", group: "I", team1: "Noruega",   team2: "Senegal",  date: "2026-06-22", time: "21:00", venue: "Miami" },
  { id: 53, stage: "Grupo I", group: "I", team1: "Noruega",   team2: "Francia",  date: "2026-06-26", time: "16:00", venue: "Dallas" },
  { id: 54, stage: "Grupo I", group: "I", team1: "Senegal",   team2: "Irak",     date: "2026-06-26", time: "16:00", venue: "Miami" },

  // ========== GRUPO J: Argentina, Argelia, Austria, Jordania ==========
  { id: 55, stage: "Grupo J", group: "J", team1: "Argentina",  team2: "Argelia",   date: "2026-06-16", time: "22:00", venue: "MetLife Stadium, NJ" },
  { id: 56, stage: "Grupo J", group: "J", team1: "Austria",    team2: "Jordania",  date: "2026-06-17", time: "01:00", venue: "Boston" },
  { id: 57, stage: "Grupo J", group: "J", team1: "Argentina",  team2: "Austria",   date: "2026-06-22", time: "14:00", venue: "MetLife Stadium, NJ" },
  { id: 58, stage: "Grupo J", group: "J", team1: "Jordania",   team2: "Argelia",   date: "2026-06-22", time: "20:00", venue: "Boston" },
  { id: 59, stage: "Grupo J", group: "J", team1: "Jordania",   team2: "Argentina", date: "2026-06-27", time: "23:00", venue: "MetLife Stadium, NJ" },
  { id: 60, stage: "Grupo J", group: "J", team1: "Argelia",    team2: "Austria",   date: "2026-06-27", time: "23:00", venue: "Boston" },

  // ========== GRUPO K: Portugal, RD Congo, Uzbekistán, Colombia ==========
  { id: 61, stage: "Grupo K", group: "K", team1: "Portugal",    team2: "RD Congo",     date: "2026-06-17", time: "14:00", venue: "Lincoln Financial Field, Filadelfia" },
  { id: 62, stage: "Grupo K", group: "K", team1: "Uzbekistán",  team2: "Colombia",     date: "2026-06-17", time: "23:00", venue: "Seattle" },
  { id: 63, stage: "Grupo K", group: "K", team1: "Portugal",    team2: "Uzbekistán",   date: "2026-06-23", time: "14:00", venue: "Filadelfia" },
  { id: 64, stage: "Grupo K", group: "K", team1: "Colombia",    team2: "RD Congo",     date: "2026-06-23", time: "23:00", venue: "Seattle" },
  { id: 65, stage: "Grupo K", group: "K", team1: "Colombia",    team2: "Portugal",     date: "2026-06-27", time: "20:30", venue: "Filadelfia" },
  { id: 66, stage: "Grupo K", group: "K", team1: "RD Congo",    team2: "Uzbekistán",   date: "2026-06-27", time: "20:30", venue: "Seattle" },

  // ========== GRUPO L: Inglaterra, Croacia, Ghana, Panamá ==========
  { id: 67, stage: "Grupo L", group: "L", team1: "Inglaterra",  team2: "Croacia",   date: "2026-06-17", time: "17:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 68, stage: "Grupo L", group: "L", team1: "Ghana",       team2: "Panamá",    date: "2026-06-17", time: "20:00", venue: "Atlanta" },
  { id: 69, stage: "Grupo L", group: "L", team1: "Inglaterra",  team2: "Ghana",     date: "2026-06-23", time: "17:00", venue: "Los Angeles" },
  { id: 70, stage: "Grupo L", group: "L", team1: "Panamá",      team2: "Croacia",   date: "2026-06-23", time: "20:00", venue: "Atlanta" },
  { id: 71, stage: "Grupo L", group: "L", team1: "Panamá",      team2: "Inglaterra",date: "2026-06-27", time: "18:00", venue: "Los Angeles" },
  { id: 72, stage: "Grupo L", group: "L", team1: "Croacia",     team2: "Ghana",     date: "2026-06-27", time: "18:00", venue: "Atlanta" },

  // ========== 32avos DE FINAL ==========
  { id: 73, stage: "32avos", team1: "1A",  team2: "3CDF", date: "2026-07-02", time: "12:00", venue: "Por definir" },
  { id: 74, stage: "32avos", team1: "1C",  team2: "3DEF", date: "2026-07-02", time: "16:00", venue: "Por definir" },
  { id: 75, stage: "32avos", team1: "1B",  team2: "3ABF", date: "2026-07-03", time: "12:00", venue: "Por definir" },
  { id: 76, stage: "32avos", team1: "1F",  team2: "3ABC", date: "2026-07-03", time: "16:00", venue: "Por definir" },
  { id: 77, stage: "32avos", team1: "2A",  team2: "2C",   date: "2026-07-04", time: "12:00", venue: "Por definir" },
  { id: 78, stage: "32avos", team1: "1L",  team2: "2H",   date: "2026-07-04", time: "16:00", venue: "Por definir" },
  { id: 79, stage: "32avos", team1: "1E",  team2: "3ABD", date: "2026-07-04", time: "20:00", venue: "Por definir" },
  { id: 80, stage: "32avos", team1: "1D",  team2: "3BEF", date: "2026-07-05", time: "12:00", venue: "Por definir" },
  { id: 81, stage: "32avos", team1: "1G",  team2: "3CEH", date: "2026-07-05", time: "16:00", venue: "Por definir" },
  { id: 82, stage: "32avos", team1: "1H",  team2: "3CEG", date: "2026-07-05", time: "20:00", venue: "Por definir" },
  { id: 83, stage: "32avos", team1: "1I",  team2: "3JKL", date: "2026-07-06", time: "12:00", venue: "Por definir" },
  { id: 84, stage: "32avos", team1: "2D",  team2: "2E",   date: "2026-07-06", time: "16:00", venue: "Por definir" },
  { id: 85, stage: "32avos", team1: "1J",  team2: "3IKL", date: "2026-07-06", time: "20:00", venue: "Por definir" },
  { id: 86, stage: "32avos", team1: "1K",  team2: "3HIJ", date: "2026-07-07", time: "12:00", venue: "Por definir" },
  { id: 87, stage: "32avos", team1: "2F",  team2: "2G",   date: "2026-07-07", time: "16:00", venue: "Por definir" },
  { id: 88, stage: "32avos", team1: "2I",  team2: "2J",   date: "2026-07-07", time: "20:00", venue: "Por definir" },

  // ========== OCTAVOS DE FINAL ==========
  { id: 89, stage: "Octavos", team1: "Gan.73", team2: "Gan.74", date: "2026-07-09", time: "12:00", venue: "Por definir" },
  { id: 90, stage: "Octavos", team1: "Gan.75", team2: "Gan.76", date: "2026-07-09", time: "16:00", venue: "Por definir" },
  { id: 91, stage: "Octavos", team1: "Gan.77", team2: "Gan.78", date: "2026-07-09", time: "20:00", venue: "Por definir" },
  { id: 92, stage: "Octavos", team1: "Gan.79", team2: "Gan.80", date: "2026-07-10", time: "12:00", venue: "Por definir" },
  { id: 93, stage: "Octavos", team1: "Gan.81", team2: "Gan.82", date: "2026-07-10", time: "16:00", venue: "Por definir" },
  { id: 94, stage: "Octavos", team1: "Gan.83", team2: "Gan.84", date: "2026-07-10", time: "20:00", venue: "Por definir" },
  { id: 95, stage: "Octavos", team1: "Gan.85", team2: "Gan.86", date: "2026-07-11", time: "16:00", venue: "Por definir" },
  { id: 96, stage: "Octavos", team1: "Gan.87", team2: "Gan.88", date: "2026-07-11", time: "20:00", venue: "Por definir" },

  // ========== CUARTOS DE FINAL ==========
  { id: 97,  stage: "Cuartos", team1: "Gan.89", team2: "Gan.90", date: "2026-07-13", time: "16:00", venue: "Por definir" },
  { id: 98,  stage: "Cuartos", team1: "Gan.91", team2: "Gan.92", date: "2026-07-13", time: "20:00", venue: "Por definir" },
  { id: 99,  stage: "Cuartos", team1: "Gan.93", team2: "Gan.94", date: "2026-07-14", time: "16:00", venue: "Por definir" },
  { id: 100, stage: "Cuartos", team1: "Gan.95", team2: "Gan.96", date: "2026-07-14", time: "20:00", venue: "Por definir" },

  // ========== SEMIFINALES ==========
  { id: 101, stage: "Semifinal", team1: "Gan.97", team2: "Gan.98",  date: "2026-07-16", time: "20:00", venue: "AT&T Stadium, Dallas" },
  { id: 102, stage: "Semifinal", team1: "Gan.99", team2: "Gan.100", date: "2026-07-17", time: "20:00", venue: "Mercedes-Benz Stadium, Atlanta" },

  // ========== TERCER PUESTO ==========
  { id: 103, stage: "3er Puesto", team1: "Per.101", team2: "Per.102", date: "2026-07-18", time: "16:00", venue: "Hard Rock Stadium, Miami" },

  // ========== FINAL ==========
  { id: 104, stage: "Final", team1: "Gan.101", team2: "Gan.102", date: "2026-07-19", time: "16:00", venue: "MetLife Stadium, Nueva Jersey" }
];
