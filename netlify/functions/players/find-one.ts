import type {Handler} from "@netlify/functions"
export const findOneHandler: Handler = async(event, context) => {
	return {
		body: JSON.stringify({ message: 'Hello World: find one'}),
		statusCode: 416
	}
}