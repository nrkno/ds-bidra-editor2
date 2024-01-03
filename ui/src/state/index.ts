import { writable } from "svelte/store";
import { formSchema } from "@nrk/ds-bidra-config-common";
import type { newForm } from "../utils";

export const FORM = writable(formSchema);
export const NEWFORM = writable<newForm>([]);
