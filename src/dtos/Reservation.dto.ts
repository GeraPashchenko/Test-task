export interface ReservationAmenityWithDurationDTO {
	id: number;
	user_id: number;
	start_time_hhmm: string;
	duration: number;
	amenity_name: string;
};

export interface ReservationAmenityWithDurationInputDTO {
	amenity_id: number;
	date: number;
};
