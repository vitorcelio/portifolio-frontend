import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/projetos/post/post.component';
import { HttpClientModule } from '@angular/common/http';

export const appRotas: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'projetos', component: ProjetosComponent},
  {path: 'projeto/:link', component: PostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    ProjetosComponent,
    PostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRotas, {scrollPositionRestoration: 'top', anchorScrolling: 'enabled'}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
