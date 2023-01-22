import styles from './submit.module.scss';
import classNames from 'classnames';
export interface SubmitProps {
    className?: string;
}

export const Submit = ({ className }: SubmitProps) => {
    return <div className={classNames(styles.root, className)}>Submit</div>;
};
