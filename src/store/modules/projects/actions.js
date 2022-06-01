export default {
  newProject(context, data) {
    const project = {
      id: "p3",
      name: data.name,
    };
    context.commit("newProject", project);
  },
};
