const Section = require("../../modules/section/section.model");
const SectionTypeRegistry = require("./sectionTypeRegistry");

exports.createSection = async ({ pageId, type, data, order }) => {
  const sectionType = SectionTypeRegistry[type];

  if (!sectionType) {
    throw new Error("Invalid section type");
  }

  return Section.create({
    pageId,
    type,
    data,
    order,
  });
};

exports.reorderSections = async (pageId, sections) => {
  const bulkOps = sections.map((section) => ({
    updateOne: {
      filter: { _id: section.id, pageId },
      update: { order: section.order },
    },
  }));

  await Section.bulkWrite(bulkOps);
};
