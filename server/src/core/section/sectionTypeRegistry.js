const SectionTypeRegistry = {
  hero: {
    name: "Hero",
    allowedData: ["title", "subtitle", "backgroundImage", "buttons"],
  },

  text: {
    name: "Text",
    allowedData: ["content"],
  },

  image: {
    name: "Image",
    allowedData: ["imageUrl", "caption"],
  },

  navbar: {
    name: "Navbar",
    allowedData: ["logo", "menuItems"],
  },

  footer: {
    name: "Footer",
    allowedData: ["text", "links"],
  },
};

module.exports = SectionTypeRegistry;
