const SECTION_TYPES = require("./sectionTypes");
const ApiError = require("../ApiError");

function validateField(field, value, path) {
  if (field.required && (value === undefined || value === null)) {
    throw new ApiError(400, `${path} is required`);
  }

  if (value === undefined || value === null) return;

  if (field.type === "array") {
    if (!Array.isArray(value)) {
      throw new ApiError(400, `${path} must be an array`);
    }

    if (field.itemFields) {
      value.forEach((item, index) => {
        field.itemFields.forEach((subField) => {
          validateField(
            subField,
            item[subField.name],
            `${path}[${index}].${subField.name}`
          );
        });
      });
    }
  }
}

function validateSectionData(type, data) {
  const sectionType = SECTION_TYPES[type];

  if (!sectionType) {
    throw new ApiError(400, "Invalid section type");
  }

  if (!data || typeof data !== "object") {
    throw new ApiError(400, "Section data must be an object");
  }

  sectionType.fields.forEach((field) => {
    validateField(field, data[field.name], field.name);
  });
}

module.exports = {
  validateSectionData,
};
