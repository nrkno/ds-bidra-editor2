export const MIMIR_API_ENDPOINT: string = "https://mimir.mjoll.no";

export type Config = {
	release: string;
	apiHost: string;
	navigationBehavior: NavigationBehavior;
	authenticationFlow: AuthenticationFlow;
};
export type NavigationBehavior = "NONE" | "HISTORY_ONLY" | "LOCATION";
export type AuthenticationFlow = "REDIRECT" | "POPUP" | "CALLBACK";
declare const CONFIG_INPUT: Config;

const CONFIG = { ...CONFIG_INPUT };

// to initialize to window.location.origin, if necessary
setApiHost(CONFIG_INPUT.apiHost);

export function setApiHost(host: string): void {
	if (!host.endsWith("/")) host += "/";
	CONFIG.apiHost = host === "/" ? window.location.origin + "/" : host;
}

export function getApiUrl(): URL {
	return new URL("api/v1", CONFIG.apiHost);
}
