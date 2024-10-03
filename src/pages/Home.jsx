import LoginForm from '../components/LoginForm'
import Modal from '../components/Modal'
import Products from '../components/products'
import RegisterForm from '../components/RegisterForm'

export default function Home() {
    return (
        <div className='container px-4'>
            <Products className="grid-cols-3" />

            <Modal textTrigger="login" className="bg-red-200">
                <LoginForm />
            </Modal>

            <Modal textTrigger="register">
                <RegisterForm />
            </Modal>
        </div>
    )
}
