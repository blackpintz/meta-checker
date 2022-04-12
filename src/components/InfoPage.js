import { Link } from "react-router-dom"
export default function InfoPage() {
    return(
        <>
            <h2>This is the information page.</h2>
            <Link to="/another-page">Go to another page.</Link>
        </>
    )
}