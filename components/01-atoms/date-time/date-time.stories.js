// Twig templates
import dateTimeTwig from './date-time.twig';

// Data files
// import dateTimeData from './date-time.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Date Time',
  argTypes: {
    datePicker: {
      control: {
        type: 'date',
      },
    },
    format: {
      name: 'Date/Time Format',
      options: ['time', 'date'],
      defaultValue: 'time',
      control: {
        type: 'select',
        labels: {
          time: 'Time',
          date: 'Date',
        },
      },
    },
    display: {
      name: 'Date/Time Display',
      control: {
        type: 'select',
        options: {
          Test: 'text',
          Badge: 'badge',
        },
      },
      defaultValue: 'text',
    },
    allDay: {
      name: 'All Day',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};

export const dateTime = ({ datePicker, format, allDay, display }) => {
  const date = new Date(datePicker.datePicker).toLocaleDateString('en-US');
  return `<div class="cl-spacing-large">
    ${dateTimeTwig({
      date_time__start: date,
      date_time__format: format,
      date_time__all_day: allDay,
      date_time__display: display,
    })}
  </div>`;
};
