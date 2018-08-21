
export function getProjectStatus(props, projectData) {
  const projectsStatuses = {};
  props.hiddenProjects.forEach(ele => {
    for (const key in projectData) {
      if (ele.name === key && ele.route === props.route) {
        projectsStatuses[key] = { pointerEvents: "none", opacity: 0 };
      }
    }
  });
  return projectsStatuses;
}
