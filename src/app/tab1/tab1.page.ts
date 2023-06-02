import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Product } from './products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, FormsModule],
})
export class Tab1Page {
  constructor() {}

  productToAdd : string|undefined 

  productList : Product[] = [
    { name: "Pomme", isChecked: false},
    { name: "Poire", isChecked: true}
  ]
}
