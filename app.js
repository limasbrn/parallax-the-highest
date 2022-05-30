let montanha5 = document.querySelector('.montanha5');
        let montanha3 = document.querySelector('.montanha3');
        let montanha4 = document.querySelector('.montanha4');
        let montanha2 = document.querySelector('.montanha2');
        let montanha1 = document.querySelector('.montanha1');
        let nuvens1 = document.querySelector('.nuvens1');
        let nuvens2 = document.querySelector('.nuvens2');
        let homem  = document.querySelector('.hominho');
        let botao  = document.querySelector('.btn-abs');
        let frase  = document.querySelector('.frase');
      
        window.addEventListener('scroll', function() {
            let value = window.scrollY;

            montanha5.style.bottom = value * -0.5 + 'px';
            montanha3.style.bottom = value * -0.2 + 'px';
            montanha4.style.bottom = value * -0.2 + 'px';
           
            homem.style.bottom = value * -0.1 + 'px';
            nuvens1.style.left = value * 0.5 + 'px';
            nuvens2.style.right = value * 0.5 + 'px';
        })
        

       