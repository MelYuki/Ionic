import { Component } from '@angular/core';
import { ActionSheetController, IonicModule } from '@ionic/angular';
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
  constructor(private _actionSheet : ActionSheetController) {}

  productToAdd : string|undefined 

  productList : Product[] = [
    { name: "Pomme", isChecked: false},
    { name: "Poire", isChecked: true}
  ]

  add() : void {
    // Si l'input existe et qu'il est différent de rien...
    if(this.productToAdd && this.productToAdd.trim() != "") {
      // En double?
      if(!this.productList.find(p => p.name.toLowerCase() === this.productToAdd?.trim().toLowerCase())) {
        // Ajout dans la liste
        this.productList = [
          ...this.productList,
          {
            name: this.productToAdd,
            isChecked: false
          }
        ]
      }
    }
    // Refresh l'input à 0
    this.productToAdd = undefined
  }

  async actionSheet(product : Product) {
    // Créa du menu actionSheet
    const otherSheet = await this._actionSheet.create({
      header: product.name,
      buttons: [
        {
          text: product.isChecked ? "Décocher" : "Cocher"
        },
        {
          text: "Supprimer",
          role: "destructive" //pour ios
        },
        {
          text: "Annuler",
          role: "cancel" //pour ios
        },
      ]
    })

    // Affichage du menu
    otherSheet.present()
  }
}
