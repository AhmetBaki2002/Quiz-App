import LogoImg from '../assets/quiz-logo.png';

export default function Header () {
    return <header>
        <img src={LogoImg} alt="Logo img" />
        <h1>Quiz App</h1>
    </header>
}