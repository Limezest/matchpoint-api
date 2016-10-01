DROP TABLE IF EXISTS UTILISATEUR;
Create Table UTILISATEUR
(
    utilisateurID   INTEGER NOT NULL UNIQUE,
    firstname       CHAR(15) NOT NULL,
    lastname        CHAR(15) NOT NULL,
    mail            CHAR(50),
    email           CHAR(50) NOT NULL UNIQUE,
    phone           CHAR(20) UNIQUE,
    birthday        CHAR(10),
    isAdmin         BOOLEAN DEFAULT FALSE,
    isPlayer        BOOLEAN DEFAULT FALSE,
    isCoach         BOOLEAN DEFAULT FALSE,
    CONSTRAINT utilisateurID PRIMARY KEY(utilisateurID)
);


DROP TABLE IF EXISTS CLUB;
CREATE TABLE CLUB
(
    clubID      INTEGER NOT NULL UNIQUE,
    adminID     INTEGER REFERENCES UTILISATEUR(utilisateurID) NOT NULL,
    name        CHAR(20) NOT NULL,
    picture     CHAR(30),
    logo        CHAR(30),
    color       CHAR(15),
    mail        CHAR(50),
    email       CHAR(50) NOT NULL UNIQUE,
    phone       CHAR(20)UNIQUE,
    CONSTRAINT clubID PRIMARY KEY(clubID)
);


DROP TABLE IF EXISTS TEAM;
CREATE TABLE TEAM
(
    teamID  INTEGER NOT NULL UNIQUE,
    clubID  INTEGER REFERENCES CLUB(clubID) NOT NULL,
    coachID INTEGER REFERENCES UTILISATEUR(utilisateurID),
    name    CHAR(20),
    CONSTRAINT teamID PRIMARY KEY(teamID)
);


DROP TABLE IF EXISTS UTILISATEUR_TEAM;
CREATE TABLE UTILISATEUR_TEAM
(
    utilisateurID   INTEGER REFERENCES UTILISATEUR(utilisateurID) NOT NULL,
    teamID          INTEGER REFERENCES TEAM(teamID) NOT NULL
);


DROP TABLE IF EXISTS FOLLOW_TEAM;
CREATE TABLE FOLLOW_TEAM
(
    utilisateurID   INTEGER REFERENCES UTILISATEUR(utilisateurID) NOT NULL,
    teamID          INTEGER REFERENCES TEAM(teamID) NOT NULL
);


DROP TABLE IF EXISTS GYMNASIUM;
CREATE TABLE GYMNASIUM
(
    gymnasiumID INTEGER NOT NULL UNIQUE,
    name        CHAR(30) NOT NULL,
    location    CHAR(50) NOT NULL,
    email       CHAR(50),
    phone       CHAR(20),
    capacity    INTEGER,
    CONSTRAINT gymnasiumID PRIMARY KEY(gymnasiumID)
);


DROP TABLE IF EXISTS CS_LEVEL;
CREATE TABLE CS_LEVEL
(
    cs_levelID  INTEGER NOT NULL UNIQUE,
    value       CHAR(20),
    CONSTRAINT cs_levelID PRIMARY KEY(cs_levelID)
);


DROP TABLE IF EXISTS CS_AGE;
CREATE TABLE CS_AGE
(
    cs_ageID    INTEGER NOT NULL UNIQUE,
    value       CHAR(20),
    CONSTRAINT cs_ageID PRIMARY KEY(cs_ageID)
);


DROP TABLE IF EXISTS CHAMPIONSHIP;
CREATE TABLE CHAMPIONSHIP
(
    championshipID      INTEGER NOT NULL UNIQUE,
    name                CHAR(30) NOT NULL UNIQUE,
    level               INTEGER REFERENCES CS_LEVEL(cs_levelID),
    age                 INTEGER REFERENCES CS_AGE(cs_ageID),
    masculinFeminin     CHAR(1),
    CONSTRAINT championshipID PRIMARY KEY(championshipID)
);

DROP TABLE IF EXISTS MATCH;
CREATE TABLE MATCH
(
    matchID                 INTEGER NOT NULL UNIQUE,
    championshipID          INTEGER REFERENCES CHAMPIONSHIP(championshipID),
    gymnasiumID             INTEGER REFERENCES GYMNASIUM(gymnasiumID),
    date_d                  DATE NOT NULL,
    team1ID                 INTEGER REFERENCES TEAM(teamID),
    team2ID                 INTEGER REFERENCES TEAM(teamID),
    scoreTeam1              INTEGER,
    scoreTeam2              INTEGER,
    teamQuiAccueilleID      INTEGER REFERENCES TEAM(teamID),
    CONSTRAINT matchID PRIMARY KEY(matchID)
);


DROP TABLE IF EXISTS TEAM_CHAMPIONSHIP;
CREATE TABLE TEAM_CHAMPIONSHIP
(
    teamID          INTEGER REFERENCES TEAM(teamID) NOT NULL,
    championshipID  INTEGER REFERENCES CHAMPIONSHIP(championshipID) NOT NULL,
    points          INTEGER NOT NULL DEFAULT 0,
    played          INTEGER NOT NULL DEFAULT 0,
    wins            INTEGER NOT NULL DEFAULT 0,
    loss            INTEGER NOT NULL DEFAULT 0,
    tie             INTEGER NOT NULL DEFAULT 0
);