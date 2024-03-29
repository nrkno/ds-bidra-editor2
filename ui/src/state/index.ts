import { writable } from "svelte/store";
import { type FormData } from "../model/bidra-types";
import { type userData } from "../../../api/src/auth/index";
export const FORM = writable<FormData>();
export const SAVED_FORM= writable<FormData>();

export const SHOWFORMS = writable<boolean>(true);

export const USERDATA = writable<userData>({
  displayName: "unknown",
  userId: "unknown",
  accessGroups: [{ name: "test", id: "sdfsdfsdf" }],
});
export interface FormEventHandler {
  target: EventTarget | null;
}
