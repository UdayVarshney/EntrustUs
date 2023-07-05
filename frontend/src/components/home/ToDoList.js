import React from 'react'
import ToDoComponent from '../toDoList/ToDoComponent'
import todo from '../../assets/todolist/todo.svg'
import account from '../../assets/todolist/account.svg'
import lifeplan from '../../assets/todolist/lifeplan.svg'

const ToDoList = () => {
    return (
        <section class="flex-col body-font bg-[#171A46] justify-center">
          <div class="container px-5 py-24 mx-auto">
            <ToDoComponent
              title = "To-Dos"
              description = "This is where you see your checklist with all the things that make up a complete Lifeplan. Manage your health & medical, financial, legal, eldercare docuements here."
              icon = {todo}
            />
            <ToDoComponent
              title = "My LifePlan"
              description = "This is your plan. It is organized into different sections. Here, you can print and share all the elements of your plan as you desire."
              icon = {lifeplan}
            />
            <ToDoComponent
              title = "Account Settings"
              description = "This is where you manage your account information such as your name, email, passwords, billings history and subscription status."
              icon = {account}
            />

          </div>
        </section>

    )
}

export default ToDoList