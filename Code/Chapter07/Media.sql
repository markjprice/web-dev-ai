DROP TABLE IF EXISTS credits;
DROP TABLE IF EXISTS episodes;
DROP TABLE IF EXISTS seasons;
DROP TABLE IF EXISTS titles;
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS roles;

CREATE TABLE titles (
  title_id     INTEGER PRIMARY KEY,
  name         TEXT    NOT NULL,
  kind         TEXT    NOT NULL CHECK (kind IN ('film','series')),
  release_year INTEGER NOT NULL CHECK (release_year >= 1888),
  universe     TEXT    NULL,
  UNIQUE(name, release_year)
);

CREATE TABLE seasons (
  season_id INTEGER PRIMARY KEY,
  title_id  INTEGER NOT NULL,
  season_no INTEGER NOT NULL CHECK (season_no >= 1),
  UNIQUE(title_id, season_no),
  FOREIGN KEY (title_id) REFERENCES titles(title_id) ON DELETE CASCADE
);

CREATE TABLE episodes (
  episode_id  INTEGER PRIMARY KEY,
  season_id   INTEGER NOT NULL,
  episode_no  INTEGER NOT NULL CHECK (episode_no >= 1),
  name        TEXT    NOT NULL,
  air_date    TEXT    NULL, -- ISO date string for simplicity: 'YYYY-MM-DD'
  length_min  INTEGER NULL CHECK (length_min IS NULL OR length_min > 0),
  UNIQUE(season_id, episode_no),
  FOREIGN KEY (season_id) REFERENCES seasons(season_id) ON DELETE CASCADE
);

CREATE TABLE people (
  person_id   INTEGER PRIMARY KEY,
  full_name   TEXT    NOT NULL,
  birth_year  INTEGER NULL CHECK (birth_year IS NULL OR birth_year >= 1850),
  UNIQUE(full_name, birth_year)
);

CREATE TABLE roles (
  role_id   INTEGER PRIMARY KEY,
  role_name TEXT NOT NULL UNIQUE
);

-- A credit can be for a whole titles (film/series) or for a specific episode.
-- For actors, character_name can be filled in; for directors/writers, it can be NULL.
CREATE TABLE credits (
  credit_id      INTEGER PRIMARY KEY,
  title_id       INTEGER NOT NULL,
  episode_id     INTEGER NULL,
  person_id      INTEGER NOT NULL,
  role_id        INTEGER NOT NULL,
  character_name TEXT NULL,

  FOREIGN KEY (title_id)   REFERENCES titles(title_id)   ON DELETE CASCADE,
  FOREIGN KEY (episode_id) REFERENCES episodes(episode_id) ON DELETE CASCADE,
  FOREIGN KEY (person_id)  REFERENCES people(person_id)  ON DELETE CASCADE,
  FOREIGN KEY (role_id)    REFERENCES roles(role_id)      ON DELETE CASCADE,

  -- If episode_id is provided, it must belong to the same title_id.
  -- SQLite can't enforce that with a simple FK, so we teach it as a "modeling note".
  CHECK (episode_id IS NULL OR episode_id > 0)
);

INSERT INTO roles (role_name) VALUES
('actor'),
('director'),
('writer');

-- Titles
INSERT INTO titles (name, kind, release_year, universe) VALUES
('Star Trek: The Next Generation', 'series', 1987, 'Star Trek'),
('Star Trek', 'film', 2009, 'Star Trek'),
('The Office', 'series', 2005, 'The Office'),
('The Lord of the Rings: The Fellowship of the Ring', 'film', 2001, 'Middle-earth'),
('The Matrix', 'film', 1999, 'The Matrix');

-- Seasons (for series)
INSERT INTO seasons (title_id, season_no)
SELECT title_id, 1 FROM titles WHERE name IN ('Star Trek: The Next Generation', 'The Office');

-- Episodes (a few)
INSERT INTO episodes (season_id, episode_no, name, air_date, length_min)
SELECT s.season_id, 1, 'Encounter at Farpoint', '1987-09-28', 47
FROM seasons s
JOIN titles t ON t.title_id = s.title_id
WHERE t.name = 'Star Trek: The Next Generation' AND s.season_no = 1;

INSERT INTO episodes (season_id, episode_no, name, air_date, length_min)
SELECT s.season_id, 2, 'Darmok', '1991-09-30', 45
FROM seasons s
JOIN titles t ON t.title_id = s.title_id
WHERE t.name = 'Star Trek: The Next Generation' AND s.season_no = 1;

INSERT INTO episodes (season_id, episode_no, name, air_date, length_min)
SELECT s.season_id, 1, 'Pilot', '2005-03-24', 23
FROM seasons s
JOIN titles t ON t.title_id = s.title_id
WHERE t.name = 'The Office' AND s.season_no = 1;

-- People
INSERT INTO people (full_name, birth_year) VALUES
('Patrick Stewart', 1940),
('Brent Spiner', 1949),
('Whoopi Goldberg', 1955),
('Keanu Reeves', 1964),
('Carrie-Anne Moss', 1967),
('Peter Jackson', 1961),
('Elijah Wood', 1981),
('Rainn Wilson', 1966),
('Steve Carell', 1962);

-- Credits (a few, enough to demonstrate joins)
-- TNG cast (titles-level)
INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Jean-Luc Picard'
FROM titles t, people p, roles r
WHERE t.name = 'Star Trek: The Next Generation'
  AND p.full_name = 'Patrick Stewart'
  AND r.role_name = 'actor';

INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Data'
FROM titles t, people p, roles r
WHERE t.name = 'Star Trek: The Next Generation'
  AND p.full_name = 'Brent Spiner'
  AND r.role_name = 'actor';

-- The Matrix cast (film-level)
INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Neo'
FROM titles t, people p, roles r
WHERE t.name = 'The Matrix'
  AND p.full_name = 'Keanu Reeves'
  AND r.role_name = 'actor';

INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Trinity'
FROM titles t, people p, roles r
WHERE t.name = 'The Matrix'
  AND p.full_name = 'Carrie-Anne Moss'
  AND r.role_name = 'actor';

-- LOTR director (film-level)
INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, NULL
FROM titles t, people p, roles r
WHERE t.name = 'The Lord of the Rings: The Fellowship of the Ring'
  AND p.full_name = 'Peter Jackson'
  AND r.role_name = 'director';

-- LOTR cast
INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Frodo Baggins'
FROM titles t, people p, roles r
WHERE t.name = 'The Lord of the Rings: The Fellowship of the Ring'
  AND p.full_name = 'Elijah Wood'
  AND r.role_name = 'actor';

-- The Office cast (series-level)
INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Dwight Schrute'
FROM titles t, people p, roles r
WHERE t.name = 'The Office'
  AND p.full_name = 'Rainn Wilson'
  AND r.role_name = 'actor';

INSERT INTO credits (title_id, episode_id, person_id, role_id, character_name)
SELECT t.title_id, NULL, p.person_id, r.role_id, 'Michael Scott'
FROM titles t, people p, roles r
WHERE t.name = 'The Office'
  AND p.full_name = 'Steve Carell'
  AND r.role_name = 'actor';
