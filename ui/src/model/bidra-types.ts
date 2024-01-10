import { Document, Schema } from "mongoose";

type listOptions= {
  name:string;
  value:string;
}
type checkOptions = {
  name: string;
  checked:boolean;
}
export interface FormData {
  _id?: string;
  createdAt: Date;
  editedAt: Date;
  editedBy: string;
  createdBy: string;
  authorization: string;
  direction: string;
  kaleidoId: string;
  formContactPerson: string;
  active: boolean;
  publishToWeb: boolean;
  activeFrom: string;
  label: string;
  activeTo: string;
  description: string;
  feedbackTitle: string;
  rows: number;
  text: string;
  filetypes: string;
  expiresInDays: number;
  accessGroupId: number;
  activeDirectoryGroupId: string;
  bidragCategory: number;
  bidragType: number;
  destination: string;
  site: string;
  emailName: string;
  emailSender: string;
  emailTemplate: string;
  emailSubject: string;
  emailDescription: string;
  emailReceipt: {
    fromName: string;
    from: string;
    template: string;
    languages: {
      nb: {
        subject: string;
        description: string;
        footer: string;
        url: string;
      };
    };
  };
  frontPage: boolean;
  SgJob: {
    GroupName: string;
    TemplateLibraryName: string;
    TemplateName: string;
  };
  name: string;
  form: [
    {
      _id?: string;
      editing: boolean;
      items?: listOptions[] | checkOptions[];
      text?: string;
      placeholder?: string;
      style?: string;
      kaleidoid?: string;
      imageAltText?: string;
      videoId?: string;
      videoAspect?: string;
      signiantArgumentName?: string;
      signiantArgumentName_lat?: string;
      signiantArgumentName_lng?: string;
      signiantArgumentName_stadid?: string;
      contractId?: string;
      maxFileSize?: number;
      accept?: string;
      body: string;
      target: string;
      url?: string;
      label: {nb: string;};
      type: string;
      classname?: string;
      className?: string;
      multiple?: boolean;
      validations?: {
        required?: boolean;
        before?: {
          type: string;
          required: false;
        };
        after?: {
          type: string;
          required: false;
        };
      };
    },
  ];
  sectionTags: string[];
  sectionName: string;
}
export interface Form extends Document, FormData {}
export declare const formSchema: {
  createdAt: DateConstructor;
  editedAt: DateConstructor;
  editedBy: StringConstructor;
  createdBy: StringConstructor;
  authorization: StringConstructor;
  direction: StringConstructor;
  kaleidoId: StringConstructor;
  formContactPerson: StringConstructor;
  active: BooleanConstructor;
  publishToWeb: BooleanConstructor;
  activeFrom: StringConstructor;
  label: StringConstructor;
  activeTo: StringConstructor;
  description: StringConstructor;
  feedbackTitle: StringConstructor;
  rows: NumberConstructor;
  text: StringConstructor;
  filetypes: StringConstructor;
  expiresInDays: NumberConstructor;
  accessGroupId: NumberConstructor;
  activeDirectoryGroupId: StringConstructor;
  bidragCategory: NumberConstructor;
  bidragType: NumberConstructor;
  destination: StringConstructor;
  emailName: StringConstructor;
  emailSender: StringConstructor;
  emailTemplate: StringConstructor;
  emailSubject: StringConstructor;
  emailDescription: StringConstructor;
  emailReceipt: {
    fromName: StringConstructor;
    from: StringConstructor;
    template: StringConstructor;
    languages: {
      nb: {
        subject: StringConstructor;
        description: StringConstructor;
        footer: StringConstructor;
        url: StringConstructor;
      };
      en: {
        subject: StringConstructor;
        description: StringConstructor;
        footer: StringConstructor;
        url: StringConstructor;
      };
      se: {
        subject: StringConstructor;
        description: StringConstructor;
        footer: StringConstructor;
        url: StringConstructor;
      };
    };
  };
  frontPage: BooleanConstructor;
  SgJob: {
    GroupName: StringConstructor;
    TemplateLibraryName: StringConstructor;
    TemplateName: StringConstructor;
  };
  name: {
    type: StringConstructor;
    required: boolean;
  };
  form: {
    items: {
      type: ArrayConstructor;
      default: unknown;
    };
    text: StringConstructor;
    placeholder: StringConstructor;
    style: StringConstructor;
    kaleidoid: StringConstructor;
    imageAltText: StringConstructor;
    videoId: StringConstructor;
    videoAspect: StringConstructor;
    signiantArgumentName: StringConstructor;
    signiantArgumentName_lat: StringConstructor;
    signiantArgumentName_lng: StringConstructor;
    signiantArgumentName_stadid: StringConstructor;
    contractId: StringConstructor;
    body: StringConstructor;
    target: StringConstructor;
    url: StringConstructor;
    label: typeof Schema.Types.Mixed;
    type: {
      type: StringConstructor;
      required: boolean;
    };
    maxFileSize: NumberConstructor;
    accept: StringConstructor;
    classname: StringConstructor;
    className: StringConstructor;
    multiple: BooleanConstructor;
    validations: {
      required: {
        type: BooleanConstructor;
        required: boolean;
      };
      email: {
        type: BooleanConstructor;
        required: boolean;
      };
      phoneNumber: {
        type: BooleanConstructor;
        required: boolean;
      };
      date: {
        type: BooleanConstructor;
        required: boolean;
      };
      Numberonly: {
        type: BooleanConstructor;
        required: boolean;
      };
      postcode: {
        type: BooleanConstructor;
        required: boolean;
      };
      before: {
        type: StringConstructor;
        required: boolean;
      };
      after: {
        type: StringConstructor;
        required: boolean;
      };
    };
  }[];
  sectionTags: string[];
  sectionName: StringConstructor;
};
