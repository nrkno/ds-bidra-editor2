export const defaultData = {
  image: {
    label: "Et bilde",
    kaleidoId: "U3_Lg50O2IFV_8s4MTzxKAst5YsDnzsr3j5eqQjlq8Yg",
    alt: "Et bilde av noe",
  },
  text: {
    label: "Kort spørsmål",
  },
  date: {
    label: "Velg dato",
  },
  file: {
    label: "Last opp filer",
  },
  email: {
    label: "Skriv inn e-post",
  },
};

export const mappedFieldNames = {
  email: {
    label: "Brukerens e-post",
    description: "Denne e-postadressen brukes for å sende kvittering for mottatt bidrag",
    appliesTo: ['email', 'text']
  },
  name: {
    label: "Fullt navn",
    description: "Kobles til innsenders navn i Monitor",
    appliesTo: ['text']
  },
  desscription: {
    label: "Beskrivelse",
    description: "Vises som en beskrivelse i Monitor",
    appliesTo: ['text', 'textarea', 'list']
  }
};

export const monitorExpiry = [
  {value:30, label: "etter 30 dager"},
  {value:90, label: "etter 90 dager"},
  {value:365, label: "etter ett år"},
]