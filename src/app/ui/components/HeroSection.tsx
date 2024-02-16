import AOSClient from '@/components/AOSClient';

export default function HeroSection () {
    return (
        <>
            <AOSClient>

                <section id="hero">
                <div className="hero-container" data-aos="fade-up">
                    <h1>Welcome to Swimtech Solutions</h1>
                    <h2>Where triathletes come to improve their swims</h2>
                    <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
                </div>
                </section>
                {/* <!-- End Hero --> */}

            </AOSClient>
        </>
    )
}