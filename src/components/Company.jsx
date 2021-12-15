import PropTypes from 'prop-types';

const Company = ({ page }) => {
    const data = new Date().toLocaleDateString();

    return (
        <div>
            <h3>Company Info</h3>
            <p>{`Page: ${page}, ${data}`}</p>
        </div>
    );
};

Company.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Company;
