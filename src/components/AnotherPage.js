import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';

export default function AnotherPage() {
    return(
        <>
            <Helmet>
                <title>Another page</title>
                <meta name="description" content="This is another page." />
            </Helmet>
            <h2>This is another page.</h2>
            <Link to="/">Go to Home page.</Link>
        </>
    )
}