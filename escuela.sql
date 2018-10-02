CREATE DATABASE escuela;

USE escuela;

CREATE TABLE alumnos (
    matricula INT NOT NULL,
    nombre VARCHAR(50),
    apellidos VARCHAR(100),
    fecha_nacimiento DATE
);

CREATE TABLE materias (
    clave_materia VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    area VARCHAR(50) NOT NULL
);

CREATE TABLE calificaciones (
    matricula VARCHAR(50) NOT NULL, 
    clave_materia VARCHAR(50) NOT NULL, 
    calificacion INT NOT NULL

);

SELECT fecha_nacimiento FROM alumnos ORDER BY (DateTime) ASC;

SELECT nombre FROM materias WHERE nombre= 'español';

SELECT matricula FROM alumnos WHERE matricula= 'A09998';

SELECT nombre FROM alumnos;

INSERT INTO alumnos VALUES ("Pedro" "Perez" 10-02-2018);

INSERT INTO materias VALUES ("TI0001" "introduccion a la programacion" "computacion");

DELETE FROM alumnos WHERE nombre= "Pedro", appellidos= 'Perez';


