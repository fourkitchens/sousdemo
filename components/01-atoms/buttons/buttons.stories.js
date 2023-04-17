import button from './button.twig';

import colors from '../../_data/colors.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    buttonElement: {
      control: {
        type: 'select',
        options: {
          Button: 'button',
          Link: 'a',
        },
      },
      defaultValue: 'button',
    },
    buttonStyle: {
      control: {
        type: 'select',
        options: ['filled', 'outline', 'clean', 'disabled'],
      },
      defaultValue: 'filled',
    },
    componentTheme: {
      control: {
        type: 'select',
        options: colors.accent,
      },
      defaultValue: 'base',
    },
  },
};

export const Button = ({ buttonElement, buttonStyle, componentTheme }) => `
  <div class="cl-container">
    <h1>${buttonStyle}</h1>
  </div>
  <div class="cl-container cl-spaced-row">
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Button`,
      button__style: buttonStyle,
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Right`,
      button__style: buttonStyle,
      button__icon: {
        right: true,
        name: 'arrowRight',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Left`,
      button__style: buttonStyle,
      button__icon: {
        left: true,
        name: 'arrowLeft',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__style: buttonStyle,
      button__icon_only: 'Main Menu',
      button__icon: {
        left: true,
        name: 'menu',
        decorative: true,
      },
    })}
  </div>
  <div class="cl-container cl-spaced-row" data-component-theme="${componentTheme} dark inverse">
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Button`,
      button__style: buttonStyle,
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Right`,
      button__style: buttonStyle,
      button__icon: {
        right: true,
        name: 'arrowRight',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Left`,
      button__style: buttonStyle,
      button__icon: {
        left: true,
        name: 'arrowLeft',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__style: buttonStyle,
      button__icon_only: 'disabled',
      button__icon: {
        left: true,
        name: 'menu',
        decorative: true,
      },
    })}
  </div>
  <div class="cl-container cl-spaced-row" data-component-theme="${componentTheme} base inverse">
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Button`,
      button__style: buttonStyle,
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Right`,
      button__style: buttonStyle,
      button__icon: {
        right: true,
        name: 'arrowRight',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Left`,
      button__style: buttonStyle,
      button__icon: {
        left: true,
        name: 'arrowLeft',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__style: buttonStyle,
      button__icon_only: 'Main Menu',
      button__icon: {
        left: true,
        name: 'menu',
        decorative: true,
      },
    })}
  </div>
  <div class="cl-container cl-spaced-row" data-component-theme="${componentTheme} light">
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Button`,
      button__style: buttonStyle,
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Right`,
      button__style: buttonStyle,
      button__icon: {
        right: true,
        name: 'arrowRight',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Left`,
      button__style: buttonStyle,
      button__icon: {
        left: true,
        name: 'arrowLeft',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__style: buttonStyle,
      button__icon_only: 'Main Menu',
      button__icon: {
        left: true,
        name: 'menu',
        decorative: true,
      },
    })}
  </div>
  <div class="cl-container cl-spaced-row" data-component-theme="${componentTheme} bright">
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Button`,
      button__style: buttonStyle,
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Right`,
      button__style: buttonStyle,
      button__icon: {
        right: true,
        name: 'arrowRight',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__content: `${buttonStyle} Icon Left`,
      button__style: buttonStyle,
      button__icon: {
        left: true,
        name: 'arrowLeft',
        decorative: true,
      },
    })}
    ${button({
      button__element: buttonElement,
      button__href: '#',
      button__style: buttonStyle,
      button__icon_only: 'Main Menu',
      button__icon: {
        left: true,
        name: 'menu',
        decorative: true,
      },
    })}
  </div>
`;
