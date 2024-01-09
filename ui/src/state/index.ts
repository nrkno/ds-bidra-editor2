import { writable } from "svelte/store";
import { type FormData } from "@nrk/ds-bidra-config-common";
import type { newForm } from "../utils";

export const FORM = writable<FormData>();
export const NEWFORM = writable<newForm>([]);

export const SHOWFORMS = writable<boolean>(true);

export interface FormEventHandler {
    target: EventTarget | null;
  }