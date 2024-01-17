export type Config = {
	release: string;
	apiHost: string;
};
declare const CONFIG_INPUT: Config;

const CONFIG = { ...CONFIG_INPUT };

// to initialize to window.location.origin, if necessary
setApiHost(CONFIG_INPUT.apiHost);

export function setApiHost(host: string): void {
	if (!host.endsWith("/")) host += "/";
	CONFIG.apiHost = host === "/" ? window.location.origin + "/" : host;
}

export function getApiUrl(): URL {
	return new URL(CONFIG.apiHost);
}
