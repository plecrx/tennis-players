import type {Handler} from "@netlify/functions"
export const handler: Handler = async(event, context) => {
	return {
		body: JSON.stringify({ message: 'Hello World: find all !'}),
		statusCode: 200
	}
}