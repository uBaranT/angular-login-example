import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent {
  savedItemsList: string[] = ['Öğe 1', 'Öğe 2', 'Öğe 3'];

  saveItems(): void {
    console.log('Saved Items:', this.savedItemsList);
  }
}
