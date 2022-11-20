import React, { useState } from "react"
import DropTransmissions from "./DropTransmissions"

const Form = ({ vehicleData = {}, postVehicle, updateVehicle }) => {
	const [vehicle, setVehicle] = useState({
		year: vehicleData.year ?? "",
		make: vehicleData.make ?? "",
		model: vehicleData.model ?? "",
		price: vehicleData.price ?? "",
		companiesId: vehicleData.companiesId ?? "0",
	})

	const handleValue = e => {
		setVehicle({ ...vehicle, [e.target.name]: e.target.value })
	}

	const submitVehicle = e => {
		e.preventDefault()

		if (vehicle.companiesId === "0") return

		if (vehicleData.id) {
			updateVehicle(vehicleData.id, vehicle)
		} else {
			postVehicle(vehicle)
		}

		setVehicle({ ...vehicle, year: "", make: "", model: "", price: "", companiesId: "0" })
	}

	return (
		<form onSubmit={submitVehicle} className='row'>
			<input
				type='text'
				name='year'
				value={vehicle.year}
				placeholder='Year'
				pattern='[0-9]{4}'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='make'
				value={vehicle.make}
				placeholder='Make'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='model'
				value={vehicle.model}
				placeholder='Model'
				onChange={e => handleValue(e)}
			/>
			<input
				type='number'
				name='price'
				value={vehicle.price}
				placeholder='Price'
				// pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropTransmissions transmissionId={vehicle.companiesId} handleValue={handleValue} />
			<input
				className='btn-submit'
				type='submit'
				value={`${!vehicleData.id ? "Add new vehicle" : "Save vehicle"}`}
			/>
		</form>
	)
}

export default Form