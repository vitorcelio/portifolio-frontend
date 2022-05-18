import { Imagem } from "./imagem";
import { Participante } from "./participante";

export class Projeto {
    nome: string = '';
    link: string = '';
    url: string = '';
    descricao: string = '';
    participante!: Participante[];
    imagem!: Imagem;
}
