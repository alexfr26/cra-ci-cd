import PropTypes from 'prop-types';

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
    <p className={styles['error-message']}>{message}</p>
);

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

ErrorMessage.defaultProps = {
    message: 'Something wrong happened',
};

export default ErrorMessage;
