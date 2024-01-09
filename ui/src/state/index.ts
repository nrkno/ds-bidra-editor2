import { writable } from "svelte/store";
import { type FormData } from "@nrk/ds-bidra-config-common";
import type { newForm } from "../utils";

type UserData = {
  name:string;
  groups: string[];
  access?: 'admin' | 'super';
}
export const FORM = writable<FormData>();
export const NEWFORM = writable<newForm>([]);

export const SHOWFORMS = writable<boolean>(true);

export const USERDATA = writable<UserData>({name:'Anders', groups: []})
export interface FormEventHandler {
    target: EventTarget | null;
  }