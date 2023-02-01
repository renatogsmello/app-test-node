import { describe, expect, it } from "vitest"
import { CreateAppointment } from "./create-appointment"
import { Appointment } from "../entities/appointment"
import { getFutureDate } from "../tests/utils/get-future.date"

describe("Create Appointment", () => {
	it("should be able to create an appointment", () => {
		const createAppointment = new CreateAppointment()

		// const startsAt = new Date()
		// const endsAt = new Date()
		// startsAt.setDate(startsAt.getDate() + 1)
		// endsAt.setDate(endsAt.getDate() + 2)

		const startsAt = getFutureDate("2022-08-10")
		const endsAt = getFutureDate("2022-08-11")

		expect(
			createAppointment.execute({
				customer: "John Doe",
				startsAt,
				endsAt,
			})
		).resolves.toBeInstanceOf(Appointment)
	})
})
