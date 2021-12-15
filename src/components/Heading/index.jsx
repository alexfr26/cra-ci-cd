import './style.scss';

const Heading = ({ children, title, as: Component = 'h1', ...props }) => (
    <Component {...props}>{title || children}</Component>
);

export default Heading;
