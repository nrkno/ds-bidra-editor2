export const defaultData = {
  image: {
    label: { nb: "Et bilde" },
    kaleidoid: "U3_Lg50O2IFV_8s4MTzxKAst5YsDnzsr3j5eqQjlq8Yg",
    imageAltText: "Et bilde av noe",
  },
  text: {
    label: { nb: "Kort spørsmål" },
  },
  date: {
    label: { nb: "Velg dato" },
  },
  file: {
    label: { nb: "Last opp filer" },
  },
  email: {
    label: { nb: "Skriv inn e-post" },
  },
};

export const mappedFieldNames = {
  email: {
    label: { nb: "Brukerens e-post" },
    description: "Denne e-postadressen brukes for å sende kvittering for mottatt bidrag",
    appliesTo: ["email", "text"],
  },
  name: {
    label: { nb: "Fullt navn" },
    description: "Kobles til innsenders navn i Monitor",
    appliesTo: ["text"],
  },
  desscription: {
    label: { nb: "Beskrivelse" },
    description: "Vises som en beskrivelse i Monitor",
    appliesTo: ["text", "textarea", "list"],
  },
};

export const monitorExpiry = [
  { value: 30, label: "etter 30 dager" },
  { value: 90, label: "etter 90 dager" },
  { value: 365, label: "etter ett år" },
];
