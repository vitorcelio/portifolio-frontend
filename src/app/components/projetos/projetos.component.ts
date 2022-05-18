import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from 'src/app/models/projeto';
import { Skill } from 'src/app/models/skill';
import { ProjetoService } from 'src/app/services/projeto.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private projetoService: ProjetoService, private skillService: SkillService) { }

  projetos: Projeto[] = [];
  skills: Skill[] = [];

  ngOnInit(): void {

    if (this.projetos != null) {
      this.projetoService.getAllProjetos().subscribe(data => {
        this.projetos = data.content;
      });
    }


    if (this.skills != null) {
      this.skillService.getListSkills().subscribe(data => {
        this.skills = data;
      });
    }
  }

  pesquisarSkill(skill: string){
    this.projetoService.getAllProjetosBySkills(skill).subscribe(data => {
      this.projetos = data.content;
    });
  }

}
