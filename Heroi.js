export default class Heroi {

    constructor(nome, idade, tipo) {
        this._nome = nome;
        this._idade = idade;
        this._tipo = tipo;
    }

    get nome() {
        return this._nome;
    }

    get idade () {
        return this._idade;
    }

    get tipo () {
        return this._tipo;
    }

    atacar() {
        console.log(`${this._tipo} atacou usando ${this.tipoAtaque()}`);
    }

    tipoAtaque() {
        if(this._tipo == "mago") {
            return "magia";
        }
        else if(this._tipo == "guerreiro"){
            return "espada"
        }
        else if(this._tipo == "monge"){
            return "artes maciais";
        }
        else if(this._tipo == "ninja") {
            return "shurikens";
        }
    }
}