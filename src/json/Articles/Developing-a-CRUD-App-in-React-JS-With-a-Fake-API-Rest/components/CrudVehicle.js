import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table"

import { httpHelper } from "../helpers/httpHelper"

const CrudVehicle = () => {
	const [vehicles, setVehicles] = useState(null)

	const url = "http://localhost:5000/vehicles"
	const api = httpHelper()

	useEffect(() => {
		getVehicle()
	}, [])

	const postVehicle = vehicle => {
		api
			.post(`${url}`, { body: vehicle })
			.then(res => getVehicle())
			.catch(err => console.log(err))
	}

	const updateVehicle = (id, vehicle) => {
		api
			.put(`${url}/${id}`, { body: vehicle })
			.then(res => getVehicle())
			.catch(err => console.log(err))
	}

	const deleteVehicle = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getVehicle())
			.catch(err => console.log(err))
	}

	const getVehicle = () => {
		api
			.get(`${url}?_expand=companies`)
			.then(res => {
				setVehicles(res)
			})
			.catch(err => console.log(err))
	}

	if (!vehicles) return null

	return (
		<>
			<h3>New Vehicle</h3>
			<Form postVehicle={postVehicle} />
			<div className='all-vehicles'>
				<h3>All Vehicles</h3>
				<Table
					vehicles={vehicles}
					setVehicles={setVehicles}
					postVehicle={postVehicle}
					updateVehicle={updateVehicle}
					deleteVehicle={deleteVehicle}
				/>
			</div>
		</>
	)
}

export default CrudVehicle