import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';
import coinImg from '../assets/coin.jpg'

export default function HomePage() {
    const hostName = "https://meta-checker.herokuapp.com"
    return(
        <>
            <Helmet>
                <title>Home</title>
                <meta property="og:title" content="home-Page" />
                <meta name="description" content="This is the home page." />
                <meta property="og:description" content="This is the home page." />
                <meta property="og:image" content={hostName+coinImg} />
                <meta
                property="og:url"
                content={hostName + window.location.pathname + window.location.search}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image:alt" content="coin img" />
                <meta name="twitter:site" content="@BlockchainHut" />
            </Helmet>
            <h2>This is the home page.</h2>
            <Link to="/info-page">Go to information page.</Link>
        </>
    )
}