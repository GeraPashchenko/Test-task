# Table of contents
1. [How to test this project](#how-to-test-this-project)
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

# How to test this project

>Firstly you need to create `private.key` file like example `private.key.example` and fill it with your private key (it could be any text). Project needs it to configure `sign up/sign in` tokens.

>Then run the `npm run docker:up` command.

>Please import the `doc.postman_collection.json` file into your postman and you could test the endpoints.


---

# Task explanation

This project had been created with "`Google TypeScript Stype`" becasue I like this easy to setup and nice to manage feature.

CSV files converted to SQL insert by [CSV to SQL](https://tableconvert.com/csv-to-sql)

As I understood from the test task information - the "***date***" property of the "***Reservation***" entity is one day and both "***startTime***" and "***endTime***" in combination are time of one specific reservation in current "***date***"(means one day).

For the [Task 2](#task-2): I assume that we don't need to return any data except "**date**" and "**reservations_count**" (named count of reservations) because there are no requirements about data in task, so I'v chosen the easiest variant.

About the `appliation testing` there are tests for controllers and services. Now they are just as an example of how it would be on a project. I didn't do tests for all application because of time restrictions. I Hope you understand my hurryness.

I've added the swagger documentation, you can access it after you set up the docker containers and open [this link](http://localhost). It was my first try with the swagger in docker app, and it's failing the requests, but you can see the documentation there.

For testing the application you can yse postman requests that was provided by me. They are workable.

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
- JWT Auth;
- Jest.

---
