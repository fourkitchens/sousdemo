Drupal.behaviors.backgroundImage = {
  attach() {
    class ResponsiveBackgroundImage {
      constructor(element) {
        this.element = element;
        this.img = element.querySelector('img');
        this.src = '';

        if (this.img) {
          this.img.addEventListener('load', () => {
            this.update();
          });
          if (this.img.complete) {
            this.update();
          }
        }
      }

      update() {
        const src =
          typeof this.img.currentSrc !== 'undefined'
            ? this.img.currentSrc
            : this.img.src;

        if (this.src !== src) {
          this.src = src;
          this.element.style.backgroundImage = `url("${this.src}")`;
        }
      }
    }

    const elements = document.querySelectorAll(
      '[data-responsive-background-image]',
    );
    const backgroundImages = [];

    elements.forEach((element) => {
      backgroundImages.push(new ResponsiveBackgroundImage(element));
    });
  },
};
