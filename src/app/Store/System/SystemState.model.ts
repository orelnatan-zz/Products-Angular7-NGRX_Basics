
import { Status } from "../../Models/Status.model";
import { Route } from "../../Models/Route.model";

export interface SystemState {
	location: Route;
	pending: boolean;
	status: Status;
}