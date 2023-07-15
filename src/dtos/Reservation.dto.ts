export interface ReservationAmenityWithDurationDTO {
	id: number;
	userId: number;
	startTimeInHHMM: string;
	duration: number;
	amenityName: string;
};

export interface ReservationAmenityWithDurationInputDTO {
	amenityId: number;
	date: number;
};
