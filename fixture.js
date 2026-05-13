// ============================================================
// FIXTURE MUNDIAL 2026 - 48 equipos / 12 grupos / 104 partidos
// ============================================================

const FIXTURE = [
  // GRUPO A
  { id: 1,  stage: "Grupo A", group: "A", team1: "México",        team2: "Equipo A2",      date: "2026-06-11", time: "20:00", venue: "Estadio Azteca, CDMX" },
  { id: 2,  stage: "Grupo A", group: "A", team1: "Equipo A3",     team2: "Equipo A4",      date: "2026-06-12", time: "18:00", venue: "Guadalajara" },
  { id: 3,  stage: "Grupo A", group: "A", team1: "México",        team2: "Equipo A3",      date: "2026-06-17", time: "18:00", venue: "Estadio Azteca, CDMX" },
  { id: 4,  stage: "Grupo A", group: "A", team1: "Equipo A2",     team2: "Equipo A4",      date: "2026-06-17", time: "21:00", venue: "Guadalajara" },
  { id: 5,  stage: "Grupo A", group: "A", team1: "Equipo A4",     team2: "México",         date: "2026-06-24", time: "16:00", venue: "Estadio Azteca, CDMX" },
  { id: 6,  stage: "Grupo A", group: "A", team1: "Equipo A3",     team2: "Equipo A2",      date: "2026-06-24", time: "16:00", venue: "Monterrey" },
  // GRUPO B
  { id: 7,  stage: "Grupo B", group: "B", team1: "Canadá",        team2: "Equipo B2",      date: "2026-06-12", time: "20:00", venue: "BMO Field, Toronto" },
  { id: 8,  stage: "Grupo B", group: "B", team1: "Equipo B3",     team2: "Equipo B4",      date: "2026-06-13", time: "15:00", venue: "Vancouver" },
  { id: 9,  stage: "Grupo B", group: "B", team1: "Canadá",        team2: "Equipo B3",      date: "2026-06-18", time: "18:00", venue: "BMO Field, Toronto" },
  { id: 10, stage: "Grupo B", group: "B", team1: "Equipo B2",     team2: "Equipo B4",      date: "2026-06-18", time: "21:00", venue: "Vancouver" },
  { id: 11, stage: "Grupo B", group: "B", team1: "Equipo B4",     team2: "Canadá",         date: "2026-06-25", time: "16:00", venue: "BMO Field, Toronto" },
  { id: 12, stage: "Grupo B", group: "B", team1: "Equipo B3",     team2: "Equipo B2",      date: "2026-06-25", time: "16:00", venue: "Vancouver" },
  // GRUPO C
  { id: 13, stage: "Grupo C", group: "C", team1: "Argentina",     team2: "Equipo C2",      date: "2026-06-13", time: "18:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 14, stage: "Grupo C", group: "C", team1: "Equipo C3",     team2: "Equipo C4",      date: "2026-06-13", time: "21:00", venue: "Seattle" },
  { id: 15, stage: "Grupo C", group: "C", team1: "Argentina",     team2: "Equipo C3",      date: "2026-06-19", time: "18:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 16, stage: "Grupo C", group: "C", team1: "Equipo C2",     team2: "Equipo C4",      date: "2026-06-19", time: "21:00", venue: "Seattle" },
  { id: 17, stage: "Grupo C", group: "C", team1: "Equipo C4",     team2: "Argentina",      date: "2026-06-26", time: "16:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 18, stage: "Grupo C", group: "C", team1: "Equipo C3",     team2: "Equipo C2",      date: "2026-06-26", time: "16:00", venue: "Seattle" },
  // GRUPO D
  { id: 19, stage: "Grupo D", group: "D", team1: "Brasil",        team2: "Equipo D2",      date: "2026-06-14", time: "18:00", venue: "MetLife Stadium, NJ" },
  { id: 20, stage: "Grupo D", group: "D", team1: "Equipo D3",     team2: "Equipo D4",      date: "2026-06-14", time: "21:00", venue: "AT&T Stadium, Dallas" },
  { id: 21, stage: "Grupo D", group: "D", team1: "Brasil",        team2: "Equipo D3",      date: "2026-06-20", time: "18:00", venue: "MetLife Stadium, NJ" },
  { id: 22, stage: "Grupo D", group: "D", team1: "Equipo D2",     team2: "Equipo D4",      date: "2026-06-20", time: "21:00", venue: "AT&T Stadium, Dallas" },
  { id: 23, stage: "Grupo D", group: "D", team1: "Equipo D4",     team2: "Brasil",         date: "2026-06-27", time: "16:00", venue: "MetLife Stadium, NJ" },
  { id: 24, stage: "Grupo D", group: "D", team1: "Equipo D3",     team2: "Equipo D2",      date: "2026-06-27", time: "16:00", venue: "AT&T Stadium, Dallas" },
  // GRUPO E
  { id: 25, stage: "Grupo E", group: "E", team1: "Francia",       team2: "Equipo E2",      date: "2026-06-14", time: "15:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  { id: 26, stage: "Grupo E", group: "E", team1: "Equipo E3",     team2: "Equipo E4",      date: "2026-06-15", time: "18:00", venue: "Miami" },
  { id: 27, stage: "Grupo E", group: "E", team1: "Francia",       team2: "Equipo E3",      date: "2026-06-20", time: "15:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  { id: 28, stage: "Grupo E", group: "E", team1: "Equipo E2",     team2: "Equipo E4",      date: "2026-06-20", time: "18:00", venue: "Miami" },
  { id: 29, stage: "Grupo E", group: "E", team1: "Equipo E4",     team2: "Francia",        date: "2026-06-26", time: "12:00", venue: "Atlanta" },
  { id: 30, stage: "Grupo E", group: "E", team1: "Equipo E3",     team2: "Equipo E2",      date: "2026-06-26", time: "12:00", venue: "Miami" },
  // GRUPO F
  { id: 31, stage: "Grupo F", group: "F", team1: "Inglaterra",    team2: "Equipo F2",      date: "2026-06-15", time: "21:00", venue: "NRG Stadium, Houston" },
  { id: 32, stage: "Grupo F", group: "F", team1: "Equipo F3",     team2: "Equipo F4",      date: "2026-06-16", time: "18:00", venue: "Kansas City" },
  { id: 33, stage: "Grupo F", group: "F", team1: "Inglaterra",    team2: "Equipo F3",      date: "2026-06-21", time: "18:00", venue: "Houston" },
  { id: 34, stage: "Grupo F", group: "F", team1: "Equipo F2",     team2: "Equipo F4",      date: "2026-06-21", time: "21:00", venue: "Kansas City" },
  { id: 35, stage: "Grupo F", group: "F", team1: "Equipo F4",     team2: "Inglaterra",     date: "2026-06-27", time: "12:00", venue: "Houston" },
  { id: 36, stage: "Grupo F", group: "F", team1: "Equipo F3",     team2: "Equipo F2",      date: "2026-06-27", time: "12:00", venue: "Kansas City" },
  // GRUPO G
  { id: 37, stage: "Grupo G", group: "G", team1: "España",        team2: "Equipo G2",      date: "2026-06-16", time: "21:00", venue: "Lincoln Financial Field, Filadelfia" },
  { id: 38, stage: "Grupo G", group: "G", team1: "Equipo G3",     team2: "Equipo G4",      date: "2026-06-17", time: "12:00", venue: "Boston" },
  { id: 39, stage: "Grupo G", group: "G", team1: "España",        team2: "Equipo G3",      date: "2026-06-22", time: "18:00", venue: "Filadelfia" },
  { id: 40, stage: "Grupo G", group: "G", team1: "Equipo G2",     team2: "Equipo G4",      date: "2026-06-22", time: "21:00", venue: "Boston" },
  { id: 41, stage: "Grupo G", group: "G", team1: "Equipo G4",     team2: "España",         date: "2026-06-28", time: "12:00", venue: "Filadelfia" },
  { id: 42, stage: "Grupo G", group: "G", team1: "Equipo G3",     team2: "Equipo G2",      date: "2026-06-28", time: "12:00", venue: "Boston" },
  // GRUPO H
  { id: 43, stage: "Grupo H", group: "H", team1: "Alemania",      team2: "Equipo H2",      date: "2026-06-17", time: "15:00", venue: "Levi's Stadium, San Francisco" },
  { id: 44, stage: "Grupo H", group: "H", team1: "Equipo H3",     team2: "Equipo H4",      date: "2026-06-18", time: "12:00", venue: "Cincinnati" },
  { id: 45, stage: "Grupo H", group: "H", team1: "Alemania",      team2: "Equipo H3",      date: "2026-06-23", time: "18:00", venue: "San Francisco" },
  { id: 46, stage: "Grupo H", group: "H", team1: "Equipo H2",     team2: "Equipo H4",      date: "2026-06-23", time: "21:00", venue: "Cincinnati" },
  { id: 47, stage: "Grupo H", group: "H", team1: "Equipo H4",     team2: "Alemania",       date: "2026-06-28", time: "16:00", venue: "San Francisco" },
  { id: 48, stage: "Grupo H", group: "H", team1: "Equipo H3",     team2: "Equipo H2",      date: "2026-06-28", time: "16:00", venue: "Cincinnati" },
  // GRUPO I
  { id: 49, stage: "Grupo I", group: "I", team1: "Portugal",      team2: "Equipo I2",      date: "2026-06-18", time: "15:00", venue: "AT&T Stadium, Dallas" },
  { id: 50, stage: "Grupo I", group: "I", team1: "Equipo I3",     team2: "Equipo I4",      date: "2026-06-19", time: "12:00", venue: "Miami" },
  { id: 51, stage: "Grupo I", group: "I", team1: "Portugal",      team2: "Equipo I3",      date: "2026-06-24", time: "18:00", venue: "Dallas" },
  { id: 52, stage: "Grupo I", group: "I", team1: "Equipo I2",     team2: "Equipo I4",      date: "2026-06-24", time: "21:00", venue: "Miami" },
  { id: 53, stage: "Grupo I", group: "I", team1: "Equipo I4",     team2: "Portugal",       date: "2026-06-29", time: "12:00", venue: "Dallas" },
  { id: 54, stage: "Grupo I", group: "I", team1: "Equipo I3",     team2: "Equipo I2",      date: "2026-06-29", time: "12:00", venue: "Miami" },
  // GRUPO J
  { id: 55, stage: "Grupo J", group: "J", team1: "Países Bajos",  team2: "Equipo J2",      date: "2026-06-19", time: "15:00", venue: "MetLife Stadium, NJ" },
  { id: 56, stage: "Grupo J", group: "J", team1: "Equipo J3",     team2: "Equipo J4",      date: "2026-06-20", time: "12:00", venue: "Boston" },
  { id: 57, stage: "Grupo J", group: "J", team1: "Países Bajos",  team2: "Equipo J3",      date: "2026-06-25", time: "18:00", venue: "MetLife Stadium, NJ" },
  { id: 58, stage: "Grupo J", group: "J", team1: "Equipo J2",     team2: "Equipo J4",      date: "2026-06-25", time: "21:00", venue: "Boston" },
  { id: 59, stage: "Grupo J", group: "J", team1: "Equipo J4",     team2: "Países Bajos",   date: "2026-06-30", time: "16:00", venue: "MetLife Stadium, NJ" },
  { id: 60, stage: "Grupo J", group: "J", team1: "Equipo J3",     team2: "Equipo J2",      date: "2026-06-30", time: "16:00", venue: "Boston" },
  // GRUPO K
  { id: 61, stage: "Grupo K", group: "K", team1: "Italia",        team2: "Equipo K2",      date: "2026-06-20", time: "15:00", venue: "Lincoln Financial Field, Filadelfia" },
  { id: 62, stage: "Grupo K", group: "K", team1: "Equipo K3",     team2: "Equipo K4",      date: "2026-06-21", time: "12:00", venue: "Seattle" },
  { id: 63, stage: "Grupo K", group: "K", team1: "Italia",        team2: "Equipo K3",      date: "2026-06-26", time: "18:00", venue: "Filadelfia" },
  { id: 64, stage: "Grupo K", group: "K", team1: "Equipo K2",     team2: "Equipo K4",      date: "2026-06-26", time: "21:00", venue: "Seattle" },
  { id: 65, stage: "Grupo K", group: "K", team1: "Equipo K4",     team2: "Italia",         date: "2026-07-01", time: "12:00", venue: "Filadelfia" },
  { id: 66, stage: "Grupo K", group: "K", team1: "Equipo K3",     team2: "Equipo K2",      date: "2026-07-01", time: "12:00", venue: "Seattle" },
  // GRUPO L
  { id: 67, stage: "Grupo L", group: "L", team1: "Estados Unidos",team2: "Equipo L2",      date: "2026-06-12", time: "16:00", venue: "SoFi Stadium, Los Angeles" },
  { id: 68, stage: "Grupo L", group: "L", team1: "Equipo L3",     team2: "Equipo L4",      date: "2026-06-13", time: "12:00", venue: "Atlanta" },
  { id: 69, stage: "Grupo L", group: "L", team1: "Estados Unidos",team2: "Equipo L3",      date: "2026-06-19", time: "18:00", venue: "Los Angeles" },
  { id: 70, stage: "Grupo L", group: "L", team1: "Equipo L2",     team2: "Equipo L4",      date: "2026-06-19", time: "21:00", venue: "Atlanta" },
  { id: 71, stage: "Grupo L", group: "L", team1: "Equipo L4",     team2: "Estados Unidos", date: "2026-06-26", time: "16:00", venue: "Los Angeles" },
  { id: 72, stage: "Grupo L", group: "L", team1: "Equipo L3",     team2: "Equipo L2",      date: "2026-06-26", time: "16:00", venue: "Atlanta" },
  // 32avos
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
  // Octavos
  { id: 89, stage: "Octavos", team1: "Gan.73", team2: "Gan.74", date: "2026-07-09", time: "12:00", venue: "Por definir" },
  { id: 90, stage: "Octavos", team1: "Gan.75", team2: "Gan.76", date: "2026-07-09", time: "16:00", venue: "Por definir" },
  { id: 91, stage: "Octavos", team1: "Gan.77", team2: "Gan.78", date: "2026-07-09", time: "20:00", venue: "Por definir" },
  { id: 92, stage: "Octavos", team1: "Gan.79", team2: "Gan.80", date: "2026-07-10", time: "12:00", venue: "Por definir" },
  { id: 93, stage: "Octavos", team1: "Gan.81", team2: "Gan.82", date: "2026-07-10", time: "16:00", venue: "Por definir" },
  { id: 94, stage: "Octavos", team1: "Gan.83", team2: "Gan.84", date: "2026-07-10", time: "20:00", venue: "Por definir" },
  { id: 95, stage: "Octavos", team1: "Gan.85", team2: "Gan.86", date: "2026-07-11", time: "16:00", venue: "Por definir" },
  { id: 96, stage: "Octavos", team1: "Gan.87", team2: "Gan.88", date: "2026-07-11", time: "20:00", venue: "Por definir" },
  // Cuartos
  { id: 97,  stage: "Cuartos", team1: "Gan.89", team2: "Gan.90", date: "2026-07-13", time: "16:00", venue: "Por definir" },
  { id: 98,  stage: "Cuartos", team1: "Gan.91", team2: "Gan.92", date: "2026-07-13", time: "20:00", venue: "Por definir" },
  { id: 99,  stage: "Cuartos", team1: "Gan.93", team2: "Gan.94", date: "2026-07-14", time: "16:00", venue: "Por definir" },
  { id: 100, stage: "Cuartos", team1: "Gan.95", team2: "Gan.96", date: "2026-07-14", time: "20:00", venue: "Por definir" },
  // Semifinales
  { id: 101, stage: "Semifinal", team1: "Gan.97", team2: "Gan.98",  date: "2026-07-16", time: "20:00", venue: "AT&T Stadium, Dallas" },
  { id: 102, stage: "Semifinal", team1: "Gan.99", team2: "Gan.100", date: "2026-07-17", time: "20:00", venue: "Mercedes-Benz Stadium, Atlanta" },
  // Tercer puesto
  { id: 103, stage: "3er Puesto", team1: "Per.101", team2: "Per.102", date: "2026-07-18", time: "16:00", venue: "Hard Rock Stadium, Miami" },
  // Final
  { id: 104, stage: "Final", team1: "Gan.101", team2: "Gan.102", date: "2026-07-19", time: "16:00", venue: "MetLife Stadium, Nueva Jersey" }
];
