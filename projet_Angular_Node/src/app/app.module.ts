import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsService } from './produits.service';
import { RecettesService } from './recettes.service';
import { AuthentificationService } from './authentification.service';
import { DiscussionService } from './discussion.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { RecettesComponent } from './recettes/recettes.component';
import { DecoComponent } from './deco/deco.component';
import { CardeComponent } from './carde/carde.component';
import { ListRecettesComponent } from './list-recettes/list-recettes.component';
import { RecetteItemComponent } from './list-recettes/recette-item/recette-item.component';
import { CartService } from './cart.service';
import { RechercheComponent } from './recherche/recherche.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConnexionComponent,
    ProduitsComponent,
    InscriptionComponent,
    RecettesComponent,
    DecoComponent,
    CardeComponent,
    ListRecettesComponent,
    RecetteItemComponent,
    RechercheComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [ProduitsService,AuthentificationService,RecettesService,DiscussionService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
