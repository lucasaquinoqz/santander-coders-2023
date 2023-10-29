import { Component } from '@angular/core';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = []
  selectedTask: Task | null = null
  taskedited: Task | null = null
  taskLog: Task[] = []
  id = 14;

  tasksBacklog: Task[] = [
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags: ["Anguar", "JS"],
      id: 1
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags: ["Anguar", "JS"],
      id: 2
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags: ["Anguar", "JS"],
      id: 3
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags: ["Anguar", "JS"],
      id: 4
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags: ["Anguar", "JS"],
      id: 5
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags: ["Anguar", "JS"],
      id: 6
    }
  ]
  tasksAndamento: Task[] = [
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags: ["Pytho"],
      id: 7
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags: ["Pytho"],
      id: 8
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags: ["Pytho"],
      id: 9
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags: ["Pytho"],
      id: 10
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags: ["Pytho"],
      id: 11
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags: ["Pytho"],
      id: 12
    }
  ]
  tasksConcluido: Task[] = [
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags: ["PHP", "HTML", "CSS"],
      id: 13
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags: ["PHP", "HTML", "CSS"],
      id: 14
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags: ["PHP", "HTML", "CSS"],
      id: 15
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags: ["PHP", "HTML", "CSS"],
      id: 16
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags: ["PHP", "HTML", "CSS"],
      id: 17
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags: ["PHP", "HTML", "CSS"],
      id: 18
    }
  ]

  onAddTask(task: Task) {
    // this.listTask.push({...task, id: ++this.id})
    // console.log(task.id)

    if (task.status === "Backlog") {
      this.tasksBacklog.push({ ...task, id: ++this.id })
    }
    if (task.status === "Andamento") {
      this.tasksAndamento.push({ ...task, id: ++this.id })
    }
    if (task.status === "Concluido") {
      this.tasksConcluido.push({ ...task, id: ++this.id })
    }
  }

  handleTask(task: Task) {
    this.selectedTask = task
    this.taskLog.push(task)
  }

  fecharDetalhes() {
    this.selectedTask = null
  }

  setEditTask(task: Task | null) {
    this.taskedited = task;
  }

  editTask(task: Task) {
    if (task.status === "Backlog") {
      const index = this.tasksBacklog.findIndex(item => item.id === task.id);
      console.log(index)
      if (index === -1) {
        alert(`Tarefa não encontrada!`);
        return;
      }
      this.tasksBacklog.splice(index, 1, task);
      this.taskedited = null;
    }
    if (task.status === "Andamento") {
      const index = this.tasksAndamento.findIndex(item => item.id === task.id);
      console.log(index)
      if (index === -1) {
        alert(`Tarefa não encontrada!`);
        return;
      }
      this.tasksAndamento.splice(index, 1, task);
      this.taskedited = null;
    }
    if (task.status === "Concluido") {
      const index = this.tasksConcluido.findIndex(item => item.id === task.id);
      console.log(index)
      if (index === -1) {
        alert(`Tarefa não encontrada!`);
        return;
      }
      this.tasksConcluido.splice(index, 1, task);
      this.taskedited = null;
    }

  }

  // editTask(task: Task) {
  //   const index = this.listTask.findIndex(item => item.id === task.id);
  //   console.log(index)
  //   if(index === -1) {
  //     alert(`Tarefa não encontrada!`);
  //     return;
  //   }
  //   this.listTask.splice(index, 1, task);
  //   this.taskedited = null;
  // }
}


