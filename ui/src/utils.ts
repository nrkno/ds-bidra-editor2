export type newForm = newFormComponent[];

type checkboxItems = {
  name: string;
  checked: boolean;
}
type listItems = {
  name: string;
  value: string;
}
type newFormComponent = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  fieldName: string;
  editing: boolean;
  kaleidoId?: string;
  alt?:string;
  size?:string;
  url?: string;
  videoAspect?: string;
  videoId?: string;
  items?: checkboxItems[] | listItems[],
  accepted?: string;
  emailTemplate: string;
};

/** Selects the text inside a text node when the node is focused */
export function selectTextOnFocus(node:any) {
  
  const handleFocus = (event:any) => {
    node && typeof node.select === 'function' && node.select()
  }
  
  node.addEventListener('focus', handleFocus)
  
  return {
    destroy() {
      node.removeEventListener('focus', handleFocus)
    }
  }
}

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
      alt: of.imageAltText || undefined, 
      size: of.className || undefined,
      url: of.url || undefined,
      videoAspect: of.videoAspect || undefined,
      videoId: of.videoId || undefined,
      items: of.items || [],
      accepted: of.accepted,
      emailTemplate: of.emailTemplate,
    };
  });
}
