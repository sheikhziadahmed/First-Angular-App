interface User {
  id: string;
  avatar: string;
  name: string;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
