module.exports = class fonctions {

    static summarize(text)
    {
        return text.substr(0, 140) + "...";
    }

    

    static date(){
        let date = new Date();
        let dateFormate = date.getFullYear() + "/" + ajoutZero(date.getMonth() + 1) + "/" + ajoutZero(date.getDate());
        return dateFormate;
    }
}

function ajoutZero(n){
    if(n <= 9){
        return "0" + n;
      }
      return n;
}
