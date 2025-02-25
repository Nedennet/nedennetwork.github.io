document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const animatedElement = document.getElementById('animatedElement');
   
    // Options pour l'observateur
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    // Fonction de rappel pour l'observateur
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // L'élément est visible, ajoutez la classe pour le faire apparaître
          animatedElement.classList.add('visible-element');
   
        } else {
          // L'élément n'est pas visible, retirez la classe pour le masquer
          animatedElement.classList.remove('visible-element');
         
        }
      });
    };

    // Création de l'observateur avec la fonction de rappel et les options
    const observer = new IntersectionObserver(callback, options);

    // Enregistrement de l'élément à observer
    observer.observe(animatedElement);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const scrollElement = document.getElementById('scrollElement');

    // Options pour l'observateur
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    // Fonction de rappel pour l'observateur
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // L'élément est visible, ajoutez la classe pour le faire apparaître
          scrollElement.classList.add('visible-on-scroll');
        } else {
          // L'élément n'est pas visible, retirez la classe pour le masquer
          scrollElement.classList.remove('visible-on-scroll');
        }
      });
    }

    // Création de l'observateur avec la fonction de rappel et les options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Enregistrement de l'élément à observer
    observer.observe(scrollElement);
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    const ElementScroll = document.getElementById('ElementScroll');

    // Options pour l'observateur
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    // Fonction de rappel pour l'observateur
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // L'élément est visible, ajoutez la classe pour le faire apparaître
          ElementScroll.classList.add('visible-on-load');
        } else {
          // L'élément n'est pas visible, retirez la classe pour le masquer
          ElementScroll.classList.remove('visible-on-load');
        }
      });
    }

    // Création de l'observateur avec la fonction de rappel et les options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Enregistrement de l'élément à observer
    observer.observe(ElementScroll);
  });

  




