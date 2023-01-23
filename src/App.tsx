import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                Have a question ? Fill out this form and we will answer you as soon as possible.
            </p>
            <p className={styles.note}>All fields are required</p>
            <form className={styles.form}>
                <FormRow>
                    <Label htmlFor={'name'}>Name</Label>
                    <Input id={'name'} name={'name'}></Input>
                </FormRow>
                <FormRow>
                    <Label htmlFor={'email'}>Email</Label>
                    <Input id={'email'} name={'email'} />
                </FormRow>
                <FormRow>
                    <Label htmlFor={'message'}>Message</Label>
                    <Input id={'message'} name={'message'}></Input>
                </FormRow>
                <FormRow>
                    <SubmitButton>Submit</SubmitButton>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
