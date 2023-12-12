const boxes = document.querySelectorAll('.box')
    
    window.addEventListener('scroll', check_animation)

    check_animation()

    function check_animation () {
        const trigger = window.innerHeight / 6 * 4;
        
        boxes.forEach(box => {

            console.log(box);
            const top = box.getBoundingClientRect().top
            
            if (trigger > top) {
                box.classList.add('show_content')
            } else {
                box.classList.remove('show_content')
            }
        })
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const card = entry.target.querySelector('.cards');
      
          if (entry.isIntersecting) {
            card.classList.add('animate__animated');
            card.classList.add('animate__zoomIn');
            card.classList.add('animate__delay-0.5s');
            return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          card.classList.remove('animate__animated');
          card.classList.remove('animate__zoomIn');
          card.classList.remove('animate__delay-0.5s');
        });
      });
      
      observer.observe(document.querySelector('.projects'));
