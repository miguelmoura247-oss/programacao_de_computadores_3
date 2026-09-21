
class Clientes{
   #nome;
   #telefone;
   #animais;
   
    constructor (nome,telefone,animais){
        this.#nome;
        this.#telefone;
        this.#animais = [];
    }

    getNome(){
        return this.#nome;
    }
    getTelefone(){
        return this.#telefone;
    }
      

    addAnimal(animais){

        if(!(animais instanceof Animal)){
            console.log("erro!");
            return;
        }

        this.animais.push(objetoAnimal);

        
        objetoAnimal.dono = this; 
    }
    }
}

    