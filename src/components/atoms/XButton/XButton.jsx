import { Button } from '@mantine/core';

const XButton = ({ children, className = '', classNames, ...rest }) => {
    return (
        <Button className={`custom-class ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Button>
    );
};

export default XButton;
