import React, { useState, useEffect } from "react"
import { httpHelper } from "../helpers/httpHelper"

const DropTransmissions = ({ transmissionId, handleValue }) => {
	const [transmissions, setTransmissions] = useState([])
	const [transmission, setTransmission] = useState(transmissionId)

	const url = "http://localhost:5000/companies"
	const api = httpHelper()

	useEffect(() => {
		api
			.get(url)
			.then(res => {
				setTransmissions([{ id: 0, name: "Select Transmission" }, ...res])
			})
			.catch(err => console.log(err))
	}, [])

	if (!transmissions) return null

	return (
		<select
			name='companiesId'
			value={transmission}
			onChange={e => {
				setTransmission(e.target.value)
				handleValue(e)
			}}
		>
			{transmissions.map(transmission => (
				<option value={transmission.id} key={transmission.id}>
					{transmission.name}
				</option>
			))}
		</select>
	)
}

export default DropTransmissions