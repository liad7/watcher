export function Home() {

    return (
        <section className="home full main-layout">
            <img className="concord-img vlv-creative full" src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/c753fe39-135e-492f-bb0d-f1f29615defe/IL-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/c753fe39-135e-492f-bb0d-f1f29615defe/IL-en-20230130-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/c753fe39-135e-492f-bb0d-f1f29615defe/IL-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/c753fe39-135e-492f-bb0d-f1f29615defe/IL-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img>
            <section className="home-content full main-layout">
                {/* <div className="logo">METFLIX</div> */}
                <button className="btn sign-in-btn">Sign In</button>
                <h1>Unlimited movies, TV <br /> shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <button className="btn start-btn">Get Started</button>
            </section>
        </section>
    )
}