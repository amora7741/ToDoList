export default function renderHeader(
  projects,
  currentProjectIndex,
  switchProject,
  addProject
) {
  const header = document.createElement('header');
  header.classList.add('card');
  const title = document.createElement('h1');
  title.textContent = 'To-Do List';

  header.appendChild(title);

  const projectDropdown = document.createElement('select');
  projectDropdown.id = 'projectDropdown';

  const updateDropdownOptions = () => {
    projectDropdown.innerHTML = '';

    projects.forEach((project, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = project.name;
      projectDropdown.appendChild(option);
    });

    projectDropdown.value = currentProjectIndex;
  };

  updateDropdownOptions();

  projectDropdown.addEventListener('change', () => {
    const newIndex = parseInt(projectDropdown.value);
    switchProject(newIndex);
  });

  header.appendChild(projectDropdown);

  const addProjectButton = document.createElement('button');
  addProjectButton.textContent = 'Add Project';
  addProjectButton.addEventListener('click', () => {
    const projectName = prompt('Enter the new project name:');
    if (projectName) {
      addProject(projectName);
      updateDropdownOptions();
    }
  });

  header.appendChild(addProjectButton);

  return header;
}
