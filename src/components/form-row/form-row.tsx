import styles from './form-row.module.scss';
import classNames from 'classnames';
import { Label } from '../label/label';
import { Input } from '../input/input';
export interface FormRowProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

export const FormRow = ({ className, children }: FormRowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
        {children}
        </div>
    );
};
