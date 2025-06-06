// src/service/schemeService.js
export const fetchSchemes = async () => {
  return [
    { _id: "1", title: "Housing Scheme", description: "Financial help for housing" },
    { _id: "2", title: "Education Scheme", description: "Aid for children's education" },
  ];
};

export const applyForScheme = async (schemeId, userId) => {
  return { success: true, message: "Application submitted." };
};


