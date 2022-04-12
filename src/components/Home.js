import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';

export default function HomePage() {
    return(
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="This is the Home page." />
            </Helmet>
            <h2>This is the home page.</h2>
            <Link to="/info-page">Go to information page.</Link>
        </>
    )
}