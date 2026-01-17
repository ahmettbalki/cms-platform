const SECTION_TYPES = {
  hero: {
    label: "Hero",
    scope: "page", 
    fields: [
      { name: "title", type: "text", required: true },
      { name: "subtitle", type: "text", required: false },
      { name: "backgroundImage", type: "image", required: false },
      { name: "ctaText", type: "text", required: false },
      { name: "ctaLink", type: "text", required: false },
    ],
  },

  richText: {
    label: "Rich Text",
    scope: "page",
    fields: [
      {
        name: "content",
        type: "richtext", 
        required: true,
      },
    ],
  },

  image: {
    label: "Image",
    scope: "page",
    fields: [
      { name: "src", type: "image", required: true },
      { name: "alt", type: "text", required: false },
    ],
  },

  navbar: {
    label: "Navbar",
    scope: "site", 
    fields: [
      { name: "logo", type: "image", required: false },
      {
        name: "menuItems",
        type: "array",
        required: true,
        itemFields: [
          { name: "label", type: "text", required: true },
          { name: "url", type: "text", required: true },
        ],
      },
    ],
  },

  footer: {
    label: "Footer",
    scope: "site",
    fields: [
      {
        name: "columns",
        type: "array",
        required: true,
        itemFields: [
          { name: "title", type: "text", required: true },
          {
            name: "links",
            type: "array",
            required: true,
            itemFields: [
              { name: "label", type: "text", required: true },
              { name: "url", type: "text", required: true },
            ],
          },
        ],
      },
    ],
  },
};

module.exports = SECTION_TYPES;
