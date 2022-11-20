import { LogoIcon } from "./assets/icons"
import CrudVehicle from "./components/CrudVehicle"
import "./styles/App.css"

function Developing_a_CRUD_App_in_React_JS_With_a_Fake_API_Rest() {
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>Vehicle Inventory</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudVehicle />
			</main>
		</>
	)
}

export default Developing_a_CRUD_App_in_React_JS_With_a_Fake_API_Rest

// [REF] https://betterprogramming.pub/developing-a-crud-app-in-react-js-with-a-fake-api-rest-9f401bad5f04