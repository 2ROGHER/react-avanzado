// En este fichero crearemos toda la logica de base de datos para la `tasks`-CRUD
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./index";

// create a task
export const addNewTask = async (task) => {
    // adding new task to firestore database
    await addDoc(collection(db, 'tasks'), task)
};

// read  tasks
export const getTasks = async () => {
    // lo que hacemos en este lado del fron es crear un `query snapshot`
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    querySnapshot.forEach((doc) => console.log(doc.id, '=> ', doc.data()));

    return querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
    })
};

// update task function
export const updateTask = async (task) => {
    await setDoc(doc(db, task.id), {
        title: task.title,
        description: task.description,
    });
};

// delete task
export const deleteTask = async(id) => {
    await deleteDoc(doc(db, 'tasks', id));
};