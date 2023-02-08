import Link from "next/link";


export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchTodos = async () => {

    const timeout = Math.floor(Math.random() *5 + 1) *1000;
    aw

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[] = await res.json();

    return todos;
}

export default async function TodosList(){

    const todos = await fetchTodos();

    return (
        <>
           {todos.map(todo => (
            <p key={todo.id}>
                <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
            </p>
           ))}
        </>
    )
}