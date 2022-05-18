import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Projeto } from 'src/app/models/projeto';
import { Skill } from 'src/app/models/skill';
import { ProjetoService } from 'src/app/services/projeto.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  diaTardeNoite = '';
  projetos: Projeto[] = [];
  skills: Skill[] = [];
  
  constructor(private projetoService: ProjetoService, private skillService: SkillService) {
  }

  ngOnInit(): void {
    this.mostrarEducacao();
    if(this.projetos != null){
      this.projetoService.getAllProjetos().subscribe(data => {
        this.projetos = data.content;
      });
    }

    if(this.skills != null){
      this.skillService.getListSkills().subscribe(data=>{
        this.skills = data;
      })
    }
  }

  mostrarEducacao(){
    var currentTime = new Date();
    var hora = currentTime.getHours();

    if(hora >= 4 && hora < 12) {
      this.diaTardeNoite = 'Bom dia';
    } else if(hora >= 12 && hora < 18) {
      this.diaTardeNoite = 'Boa tarde';
    } else {
      this.diaTardeNoite = 'Boa noite';
    }
  }

}
