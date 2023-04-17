Drupal.behaviors.loginForm = {
  attach(context) {
    const drupalLoginForm = context.querySelector('.user-login-form');
    const drupalLoginButton = context.querySelector('.login-form-toggle');

    function handledrupalLoginButtonClick(e) {
      e.preventDefault();

      if (drupalLoginForm) {
        drupalLoginForm.classList.toggle('show');
      }
    }

    if (drupalLoginButton) {
      drupalLoginButton.addEventListener('click', handledrupalLoginButtonClick);
    }
  },
};
