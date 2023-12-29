import Link from 'next/link';

const XLink = ({ children, className, ...rest }) => {
    return (
        <Link className={`custom-class ${className}`} {...rest}>
            {children}
        </Link>
    );
};

export default XLink;
