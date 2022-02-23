import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "twvzz1tl",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skZVdLX21xn705mxfCSzWiXwAu2TlL5eUZ5tMt1S8LwnriqpcodSCdpHvx7mW2fBlFnF4zSxWdICRg6HRzwgPdVAlfY6SpUZwH4prJfnxVtG19Ntgl65qGS0se5LSBz7IuPTRvEpbRGyE8bHKZknCOSuVMQsqsepwArtAfb9dmEzI7JxQNuT",
  useCdn: false,
});
