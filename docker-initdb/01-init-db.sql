CREATE TABLE amenities (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username TEXT NOT NULL,
	password TEXT NOT NULL
);

CREATE TABLE reservations (
	id SERIAL PRIMARY KEY,
	amenity_id INTEGER NOT NULL,
	user_id INTEGER NOT NULL,
	start_time INTEGER NOT NULL DEFAULT 0,
	end_time INTEGER NOT NULL DEFAULT 0,
	date BIGINT NOT NULL,
	CONSTRAINT fk_reservation_id FOREIGN KEY (amenity_id) REFERENCES amenities (id)
);
