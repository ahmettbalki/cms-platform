const sectionRegistry = {
  hero: {
    label: "Hero Section",
    fields: {
      title: {
        type: "string",
        required: true,
      },
      subtitle: {
        type: "string",
        required: false,
      },
      backgroundImage: {
        type: "image",
        required: false,
      },
    },
  },

  text: {
    label: "Text Section",
    fields: {
      content: {
        type: "text",
        required: true,
      },
    },
  },

  image: {
    label: "Image Section",
    fields: {
      src: {
        type: "image",
        required: true,
      },
      alt: {
        type: "string",
        required: false,
      },
    },
  },
};

module.exports = sectionRegistry;