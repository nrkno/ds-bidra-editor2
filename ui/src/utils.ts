export type newForm = newFormComponent[];

type newFormComponent = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  fieldName: string;
  editing: boolean;
  kaleidoId?: string;
};

export function mapOldForm(formData: any): newForm {
  return formData.map((of: any) => {
    return {
      id: of._id,
      label: of.label?.nb || "ingen label",
      type: of.type,
      required: of.validations?.required || false,
      fieldName: of.signiantArgumentName || undefined,
      editing: false,
      kaleidoId: of.kaleidoid || undefined,
    };
  });
}
