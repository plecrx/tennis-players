import type {Config, Context} from "@netlify/functions"
import {Player} from "../../src/types/player";
import {GET} from "../../src/utils/get";
export default async (_: Request, context: Context) => {
	const api_url = process.env.VITE_API_URL || ''
	const response = await GET<Record<'players', Player[]>>(api_url)

	return new Response(JSON.stringify(response.players), { status: 200 })
}

export const config: Config = {
	path: "/api/players"
};