import { writable } from "svelte/store";
import { type FormData } from "../model/bidra-types";
import { type userData } from "../../../api/src/msgraph/index";
export const FORM = writable<FormData>();
//export const NEWFORM = writable<newForm>([]);

export const SHOWFORMS = writable<boolean>(true);

export const USERDATA = writable<userData>();
export interface FormEventHandler {
  target: EventTarget | null;
}
