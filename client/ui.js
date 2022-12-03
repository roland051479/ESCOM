document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

/**
 * Task form
 */
const taskForm = document.querySelector("#taskForm");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskForm["title"].value;
  const description = taskForm["description"].value;
  const institucion = taskForm["institucion"].value;
  const nombre = taskForm["nombre"].value;
  const resolucion = taskForm["resolucion"].value;
  

  App.createTask(title, description,institucion,nombre,resolucion);
});
