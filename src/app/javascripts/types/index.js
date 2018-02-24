import PropTypes from 'prop-types';

export const formType = PropTypes.shape({
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
});

export const rockType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  message: PropTypes.string
});
