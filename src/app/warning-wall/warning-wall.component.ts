import { Component, OnInit } from '@angular/core';

import { Warning } from '../warning.model';

@Component({
  selector: 'app-warning-wall',
  templateUrl: './warning-wall.component.html',
  styleUrls: ['./warning-wall.component.css']
})
export class WarningWallComponent implements OnInit {

  warnings: Warning[];

  constructor() { }

  ngOnInit() {
    this.getAllWarningPaged();
  }

  getAllWarningPaged(){
    this.warnings = [
      {'id':1, 'title': 'Provas', 'description':'As provas finais irão ocorrer na semana de 16 a 20 de dezembro', 'publishDate': new Date(), 'viewDate': new Date()},
      {'id':2, 'title': 'Matrículas', 'description': 'O período de matrículas dos cursos regulares para o próximo semestre está encerrado. Alunos que perderam o prazo devem entrar em contato com a secretaria.', 'publishDate': new Date(), 'viewDate': new Date()},
      {'id':3, 'title': 'Novidades', 'description': 'No próximo semetre serão oferecidas novas modalidades de Idiomas como: Francês e Mandarim. Interessados devem aguardar mais detalhes.', 'publishDate': new Date(), 'viewDate': new Date()},
      {'id':4, 'title': 'Direito', 'description': 'A data para prova presencial de Direito Constitucional é 09/01.', 'publishDate': new Date(), 'viewDate': new Date()},
      {'id':5, 'title': 'Lembre AVA', 'description': 'Não perca o prazo para participação no fórum! Lembre-se que sua contribuição no estudo de caso vale 0,5 pontos.', 'publishDate': new Date(), 'viewDate': new Date()},
      {'id':6, 'title': 'Direito', 'description': 'A aula de Direito Digital já está disponível. Acesse as vídeo aulas e leituras complementares!', 'publishDate': new Date(), 'viewDate': new Date()}
    ];
  }

}
