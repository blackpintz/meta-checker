import { Link } from "react-router-dom"
export default function HomePage() {
    return(
        <>
            <h2>This is the home page.</h2>
            <Link to="/info-page">Go to information page.</Link>
        </>
    )
}