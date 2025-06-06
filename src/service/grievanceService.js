
export const submitGrievance = async (data) => {
  return { success: true, message: "Grievance submitted." };
};

export const viewGrievances = async () => {
  return [
    { _id: "1", userName: "John Doe", message: "Need help with housing." },
    { _id: "2", userName: "Jane Smith", message: "Medical assistance required." },
  ];
};

