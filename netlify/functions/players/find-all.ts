import type {Handler} from "@netlify/functions"
export const findAllHandler: Handler = async(event, context) => {
	return {
		body: JSON.stringify({ message: 'Hello World: find all !'}),
		statusCode: 200
	}
}