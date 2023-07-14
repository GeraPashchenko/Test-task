# Table of contents
1. [Prehistory](#prehistory)
2. [Task explanation](#task-explanation)
3. [Tasks](#tasks)
	- [Task 1](#task-1)
	- [Task 2](#task-2)
	- [Task 3](#task-3)
	- [Task 4](#task-4)
4. [Tech stack](#tech-stack)

# Prehistory

This project had been created with `Google TypeScript Stype` becasue I like this easy to setup and nice to manage feature.

GTS initialization includes by default: 
 - eslint;
 - tsconfig;
 - prettier.

Use these comands in development:
 - lint: lint the project to find warnings and errors;
 - clean: to delete build;
 - compile: to build the project.

CSV files converted to SQL insert by `https://tableconvert.com/csv-to-sql`

---

# Task explanation

As I understood from the requirements - the "***date***" property of the "***Reservation***" entity is one day and both "***start_time***" and "***end_time***" in combination are time of one specific reservation in current "***date***"(means one day).

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
