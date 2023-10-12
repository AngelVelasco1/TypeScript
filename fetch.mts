//? mts hace referencia a la version modular de typescript que usa los ES modules (import/export)
const enum ErrorTypes {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type APIResponse = Todos[];


try {
  const TODOS = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(TODOS);
  const data = await response.json() as APIResponse; 
  const tasks = data.map((task) => {
    return {
      userId: task.userId,
      id: task.id,
      title: task.title,
      completed: task.completed
    }
  });
  console.log(tasks);
  
} catch (err) {
  console.log({ Type: ErrorTypes.BadRequest, Error: err.message });
}
