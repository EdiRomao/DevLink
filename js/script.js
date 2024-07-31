function toggleModule() {

    const html = document.documentElement;
    html.classList.toggle('light'); // verifica se tem a class light caso não
    // ela adiciona.
    /*
    if(html.classList.contains('light')){

        html.classList.remove('light')
    }else{

        html.classList.add('light')
    }dessa forma é mais longa e muita linha de codigo

    */
   const img = document.querySelector('#profile img');

   if (html.classList.contains('light')) {
        img.setAttribute('src','../assets/img/avatar-light.png');    
   } else {
        img.setAttribute('src','../assets/img/avatar.png');
   }
}

