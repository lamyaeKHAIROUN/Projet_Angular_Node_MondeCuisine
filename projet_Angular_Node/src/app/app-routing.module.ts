import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {ProduitsComponent} from './produits/produits.component';
import {MenuComponent} from './menu/menu.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {RecettesComponent} from './recettes/recettes.component';
import {DecoComponent} from './deco/deco.component';
import {CardeComponent} from './carde/carde.component';
//ici qu'on vas ajouter les lien qui seront afficher
import {ListRecettesComponent} from './list-recettes/list-recettes.component';
import {RechercheComponent} from './recherche/recherche.component';

const routes: Routes = [
{
   path: 'user/connexion',
   component:ConnexionComponent
},
{
    path: 'produits',
    component: ProduitsComponent
},
{
    path:'utilisateurs/inscription',
    component:InscriptionComponent
},
{
    path:'recettes',
    component:RecettesComponent
},
{
    path:'deco',
    component:DecoComponent
},
{
    path:'cardes/:carde',
    component:CardeComponent
},
{
    path:'listRecette',
    component:ListRecettesComponent
},
{
    path:'recherche',
    component:RechercheComponent
},
{
    path:'recettes/modeCuisson/:modeCuisson',
    component:CardeComponent

},
{
    path:'recettes/:modeCuisson/recuperer',
    component: CardeComponent
}

];
//dans ce fichier on ajoute les routes des fonction dans node fichier serveur.js
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
