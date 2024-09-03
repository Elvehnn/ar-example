AFRAME.registerComponent('markerhandler', {
  init: function () {
    const animatedMarker = document.querySelector('#animated-marker');
    const model = document.querySelector('#animated-model');

    // по клику увеличивается моделька и через полсекунды возвращает размер)
    animatedMarker.addEventListener('click', function (ev, target) {
      if (model && event.target === model) {
        const scale = model.getAttribute('scale');

        Object.keys(scale).forEach((key) => (scale[key] = scale[key] + 0.5));
        model.setAttribute('scale', scale);

        setTimeout(() => {
          Object.keys(scale).forEach((key) => (scale[key] = scale[key] - 0.5));
          model.setAttribute('scale', scale);
        }, 500);
      }
    });
  },
});
