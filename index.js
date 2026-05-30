class Button {
  constructor(id,name){
    const buton = document.getElementById(id);
    if(!buton){
      throw new Error("NO BUTON U STI")
    }
    this.id = id
    this.name = name
  }
}
