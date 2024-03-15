export const salesAgentSchema = {
  type: "document",
  name: "salesAgent",
  title: "Sales Agent",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Full name",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "array",
      name: "details",
      title: "Details (role, company, location )",
      of: [{ type: "string" }],
      validation: (rule: any) => rule.required(),
    },
    {
      type: "string",
      name: "phone",
      title: "Phone",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "string",
      name: "whatsapp",
      title: "Whatsapp",
    },
    {
      type: "string",
      name: "email",
      title: "Email",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "image",
      name: "portret",
      title: "Portret image",
    },
  ],
};
