# Table of contents
1. [Prehistory](#prehistory)
2. [Task explanation](#task-explanation)
	- [Data format](#data-format)
	- [Requirements](#requirements)
3. [Tasks](#tasks)
	- [Task 1](#task-1)
	- [Task 2](#task-2)
	- [Task 3](#task-3)
	- [Task 4](#task-4)
4. [Tech stack](#tech-stack)

---

# Prehistory

This project had been created with "`Google TypeScript Stype`" becasue I like this easy to setup and nice to manage feature.

GTS initialization includes by default: 
 - eslint;
 - tsconfig;
 - prettier.

Use these comands in development:
 - lint: lint the project to find warnings and errors;
 - clean: to delete build;
 - compile: to build the project.

CSV files converted to SQL insert by [CSV to SQL](https://tableconvert.com/csv-to-sql)

---

# Task explanation

As I understood from the test task information - the "***date***" property of the "***Reservation***" entity is one day and both "***startTime***" and "***endTime***" in combination are time of one specific reservation in current "***date***"(means one day).

## Data format

 - Date – timestamp of the day, hour 00:00
 - Start time / end time – minutes from an hour 00:00, exp. (300 – to 5:00)

## Requirements

- using Node.js with Javascript or Typescript
- you can use any libraries / frameworks / databases
- use known good practices and patterns
- application tests are welcome
- solution should be sent as a link to the repository on GitHub / GitLab / Bitbucket
- Commit history is important
- preparing an application for production deployment (Dockerfile, Docker Compose) would be nice

---

# Tasks

## Task 1

Create an endpoint that takes the amenity object id and the timestamp of the day as parameters,
and returns a list of all bookings from amenity with the given id and the selected day. The list of
reservations should be sorted in ascending order by start time and contain the following data:

	- reservation id;
	- user id;
	- start time in HH: MM format;
	- duration in minutes;
	- name of the amenity object.


## Task 2

Create an endpoint that takes the user id as parameter, and returns a list of all bookings for this
user grouped by days.


## Task 3

Create an endpoint that accepts a CSV file and returns data from this file parsed to JSON. You
can assume that data in the first row of a file are always headers. 


## Task 4 *

This is an extra task. Implement username-password authentication and make the endpoint from the third task available only for authenticated users. Store user information in a database of your choice. 

---

# Tech stack

In this repo: 
- dockerized application with PostgreSQL as DB, PgAdmin as RDBMS, TypeORM as ORM;
- backend on Node.js + Express.js;
- JWT Auth.

---
