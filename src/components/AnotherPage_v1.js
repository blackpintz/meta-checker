import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';

export default function AnotherPageOne() {
    return(
        <>
            <Helmet>
                <title>Another page_v1</title>
                <meta name="description" content="This is another page version one." />
            </Helmet>
            <h2>This is another page version one.</h2>
            <Link to="/">Go to Home page.</Link>
        </>
    )
}