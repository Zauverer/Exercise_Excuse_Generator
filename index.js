window.onload = function(){

    let who = ['The dog','My granma','His turtle','My bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    
    printwho = who[Math.floor(Math.random() * who.length)]
    printwhat = what[Math.floor(Math.random() * what.length)]
    printwhen = when[Math.floor(Math.random() * who.length)]


    let print = (printwho +" "+ printwhat+" "+printwhen + " yesterday")
    
   document.getElementById("excuse").innerHTML =   print      /* la excusa es obtenida del documento, la gracias está en que la etiqueta es única. Inner.HTML, busca o reemplaza el contenido dentro del <p> XXXX </p>*/
}


