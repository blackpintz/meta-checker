import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';

export default function InfoPage() {
    return(
        <>
            <Helmet>
                <title>Info-Page</title>
                <meta name="description" content="This is the information page." />
            </Helmet>
            <h2>This is the information page.</h2>
            <Link to="/another-page">Go to another page.</Link>
        </>
    )
}