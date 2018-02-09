import anime from 'animejs';

export function topAnimation() {
  anime
    .timeline({ loop: 1 })
    .add({
      targets: '.ml5 .line',
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1500
    })
    .add({
      targets: '.ml5 .line',
      duration: 600,
      easing: 'easeOutExpo',
      translateY: function(e, i, l) {
        var offset = -0.625 + 0.625 * 2 * i;
        return offset + 'em';
      }
    })
    .add({
      targets: '.ml5 .ampersand',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=600'
    })
    .add({
      targets: '.ml5 .letters-left',
      opacity: [0, 1],
      translateX: ['0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=300'
    })
    .add({
      targets: '.ml5 .letters-right',
      opacity: [0, 1],
      translateX: ['-0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=600'
    })
    .add({
      targets: '.navBarContainer',
      opacity: [0, 1],
      translateY: ['-0.8em', 0],
      easing: 'easeOutExpo',
      duration: 600,
      delay: 600,
      offset: '-=600'
    })
    .add({
      targets: '.viewOfComponent',
      opacity: [0, 1],
      translateY: ['-2.8em', 0],
      easing: 'easeOutExpo',
      duration: 1600,
      delay: 300,
      offset: '-=600'
    });
}

export function portfolioAnimation() {
  console.log('finito');
  anime
    .timeline({ loop: 1 })
    .add({
      targets: '#portPic2',
      opacity: [0, 1],
      translateX: ['-20.8em', 0],
      easing: 'easeInOutBack',
      duration: 1300
    })
    .add({
      targets: '#portPic3',
      opacity: [0, 1],
      translateX: ['-20.8em', 0],
      easing: 'easeInOutBack',
      duration: 1300,
      offset: '-=600'
    })
    .add({
      targets: '.portColumn2',
      opacity: [0, 1],
      translateY: ['-10.8em', 0],
      easing: 'easeInOutBack',
      duration: 1300,
      offset: '-=600'
    })
    .add({
      targets: '.portColumn3',
      opacity: [0, 1],
      translateY: ['-10.8em', 0],
      easing: 'easeInOutBack',
      duration: 1300,
      offset: '-=600'
    });
}


