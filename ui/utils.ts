export type newForm = {
    id: string;
    label:string;
    type: 'TEXT' | 'FILE' | 'DATE'
    required:boolean;
    fieldName: string;
}

export function mapOldForm(formData:any):newForm[] {
 return formData.map((of:any) => {
    return {
        id: of._id,
        label: of.label?.nb || "ingen label",
        type: of.type,
        required: of.validations?.required || false,
        fieldName: of.signiantArgumentName || undefined 
    }
 })
}