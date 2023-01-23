import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';
import { RiSendPlaneFill } from 'react-icons/ri';

function App() {
    function handleOnSubmit(event: React.SyntheticEvent<HTMLFormElement>){
        event.preventDefault();
        const formData: Record<string, string> = {};
        function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
            return 'value' in e && 'name' in e;
        }
        Array.from(event.currentTarget.elements).filter(isInputNamedElement).forEach(elm => {
            if (!elm.name) return;
            formData[elm.name] = elm.value;
        })
        console.log('Data', formData);
    }

    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>  
                Have a question ? Fill out this form and we will answer you as soon as possible.
            </p>
            <p className={styles.note}>All fields are required</p>
            <form  onSubmit={handleOnSubmit} className={styles.form}>
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
                    <SubmitButton>
                        <RiSendPlaneFill />
                        Submit
                    </SubmitButton>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
