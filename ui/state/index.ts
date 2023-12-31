import {writable} from "svelte/store";
import { formSchema } from "@nrk/ds-bidra-config-common";

export const PAGE= writable("ALLFORMS");
export const FORM=writable(formSchema);
