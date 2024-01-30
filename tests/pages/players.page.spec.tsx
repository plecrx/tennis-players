import {render} from "@testing-library/react";
import {expect} from "vitest";
import {PlayersPage} from "../../src/pages";

describe('Players Page', () => {
	it('should display an app header with EuroStat title', () => {
		const { getByTestId } = render(<PlayersPage/>)
		const appTitle = getByTestId('app-header-title')

		expect(appTitle).to.toHaveTextContent("EuroStat")
	});

	it('should display a title', () => {
		const { getByTestId } = render(<PlayersPage/>)
		const pageTitle = getByTestId('players-page-title')

		expect(pageTitle).to.toHaveTextContent("VS")
	});
});