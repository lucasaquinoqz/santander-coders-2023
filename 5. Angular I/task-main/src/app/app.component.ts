import { Component } from '@angular/core';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [];
  selectedTask: Task | null = null
  taskLog: Task[] = []

  tasksBacklog: Task[] = [
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    },
    {
      title: "Titulo 01",
      description: "Descrição 01",
      date: new Date(),
      status: "Backlog",
      tags:["Anguar", "JS"]
    }
  ]
  tasksAndamento: Task[] = [
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    },
    {
      title: "Titulo 02",
      description: "Descrição 02",
      date: new Date(),
      status: "Andamento",
      tags:["Pytho"]
    }
  ]
  tasksConcluido: Task[] = [
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    },
    {
      title: "Titulo 03",
      description: "Descrição 03",
      date: new Date(),
      status: "Concluido",
      tags:["PHP", "HTML", "CSS"]
    }
  ]

  onAddTask(task: Task) {
    console.log(task)
    this.listTask.push(task)
    if (task.status === "Backlog") {
      this.tasksBacklog.push(task)
    }
    if (task.status === "Andamento") {
      this.tasksAndamento.push(task)
    }
    if (task.status === "Concluido") {
      this.tasksConcluido.push(task)
    }
  }

  handleTask(task: Task) {
    this.selectedTask = task
    this.taskLog.push(task)
  }

  fecharDetalhes() {
    this.selectedTask = null
  }

}
