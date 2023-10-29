export class Task {
    title: string;
    description: string;
    date: string | Date;
    status: string;
    tags?: string[];
    id: number;
  
    constructor(title = '', description = '', date = '', status = '', tags = [], id = 0) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.status = status;
      this.tags = tags;
      this.id = id;
    }
  }