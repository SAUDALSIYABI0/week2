import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Title = 'To Do by Saud Alsiyabi s00191171';
  ThingsToDo = ['learn JavaScript', 'learn C#', 'learn Angular'];
  thingsCompleted = [];
  Summary(): string {
    return `${this.ThingsToDo.length} to do /${this.thingsCompleted.length} done`;
  }

  constructor() {
    setInterval(() => {
      this.ThingsToDo.push('make coffee');
    }, 1000);
  }
}
