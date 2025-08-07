import Link from "next/link"

const Header = () => {
    return (
        <header>
            <nav>
                <Link aria-label="link to home page" href='/'>Home</Link>
                <Link aria-label="link to about page" href='/about'>About</Link>
            </nav>
        </header>
    )
}

export default Header