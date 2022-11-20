import React from "react"
import Form from "./Form"

const Table = ({ vehicles, postVehicle, updateVehicle, deleteVehicle }) => {
	const showUpdateVehicle = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ vehicle }) => {
		return (
			<>
				<div className='row'>
					<div>{vehicle.year}</div>
					<div>{vehicle.make}</div>
					<div>{vehicle.model}</div>
					<div>{vehicle.price}</div>
					<div>{vehicle.companies.name}</div>
					<div className='buttons'>
						<button onClick={() => showUpdateVehicle(vehicle.id)}>Update</button>
						<button onClick={() => deleteVehicle(vehicle.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${vehicle.id}`}>
					<Form 
						vehicleData={vehicle} 
						postVehicle={postVehicle} 
						updateVehicle={updateVehicle} 
					/>
				</div>
			</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>Year</div>
				<div>Make</div>
				<div>Model</div>
				<div>Price</div>
				<div>Transmission</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{vehicles && vehicles.map(v => <Row vehicle={v} key={v.id} />)}
			</div>
		</div>
	)
}

export default Table