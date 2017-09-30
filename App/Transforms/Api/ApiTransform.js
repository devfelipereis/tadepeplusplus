export function formatProject(project) {
  console.log('project', project)
  const attributesToUse = ['name', 'status']
  let formattedProject = {
    id: project.id
  }

  for (var attribute of attributesToUse) {
    formattedProject[attribute] = project.attributes[attribute]
  }

  console.log('formattedProject', formattedProject)

  return formattedProject;
}