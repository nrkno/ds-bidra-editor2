import { FORM, SAVED_FORM, USERDATA, type FormEventHandler } from "./state";
import { defaultData } from "./constants";
import { v4 as uuidv4 } from "uuid";
import { get } from "svelte/store";
import { type FormData } from "./model/bidra-types";
import { produce } from "immer";

const allowedFields: string[] = [
  "signiantArgumentName",
  "label",
  "required",
  "alternativeText",
  "videoId",
  "videoAspect",
  "accepted",
  "contract",
];

export function addNewItem() {
  const tempForm = produce(get(FORM), (draft) => {
    draft.form.forEach((f) => (f.editing = false));
      draft.form.push({
      ...defaultData["text"],
      _id: uuidv4(),
      editing: true,
      type: "text",
      signiantArgumentName: uuidv4(),
      validations: { required: false },
      body: "",
      target: ""
    })
  });

  FORM.set(tempForm);
}
export function saveIllustration(index: number, derivateId: string): void {
  const tempForm = produce(get(FORM), (draft) => {
    draft.form[index].kaleidoid = derivateId;
  });
  FORM.set(tempForm);
}
export function deleteItem(index: number): void {
  const tempForm = produce(get(FORM), (draft) => {
    draft.form.splice(index, 1);
  });

  FORM.set(tempForm);
}

export function toggleEditMode(index: number): void {
  const tempForm = produce(get(FORM), (draft) => {
    draft.form.forEach((f, idx) => {
      if (idx !== index) {
        draft.form[idx].editing = false;
      } else {
        draft.form[idx].editing = !f.editing;
      }
    });
  });
  FORM.set(tempForm);
}
export function resetForm(): void {
  FORM.set({ ...get(SAVED_FORM) });
}
export async function saveValue(index: number, event: FormEventHandler): Promise<void> {
  const target = event.target as HTMLInputElement;
  const tempForm = produce(get(FORM), (draft: FormData) => {
    if (target.id === "required") {
      draft.form[index].validations = { required: target.checked };
    } else if (target.id === "label") {
      draft.form[index].label = { nb: target.value };
    } else {
      if (target.value && target.id && allowedFields.includes(target.id)) {
        //@ts-ignore
        draft.form[index][target.id] = target.value;
      }
    }
  });
  FORM.set(tempForm);
}

export function saveSettingsValue(event: FormEventHandler): void {
  const target = event.target as HTMLInputElement;
  const tempForm = produce(get(FORM), (draft) => {
    if (target?.value && target?.id) {
      switch (target?.id) {
        case "emailSubject":
          draft.emailReceipt.languages.nb.subject = target.value;
          break;
        case "emailDescription":
          draft.emailReceipt.languages.nb.description = target.value;
          break;
        case "includeMetadata":
          draft.emailReceipt.includeMetadata = target.checked;
          break;
        default:
          // @ts-ignore
          draft[target.id] = target.value;
          break;
      }
    }
  });
  FORM.set(tempForm);
}
