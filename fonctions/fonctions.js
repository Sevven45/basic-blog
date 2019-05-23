module.exports = class fonctions {

    static summarize(text)
    {
        return text.substr(0, 140) + "...";
    }

    

    static date(){
        let date = new Date();
        let dateFormate =  ajoutZero(date.getDate())+ "/" + ajoutZero(date.getMonth() + 1) + "/" + date.getFullYear();
        return dateFormate;
    }
}

function ajoutZero(n){
    if(n <= 9){
        return "0" + n;
      }
      return n;
}
