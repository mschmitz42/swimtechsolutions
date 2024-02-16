import AOSClient from '@/components/AOSClient';

export default function CTASection () {
    return (
        <>
            <AOSClient>

            {/* <!-- ======= Cta Section ======= --> */}
            <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">

                <div className="text-center">
                <h3>Join Us Today!</h3>
                <p> Experience firsthand how satisfying (and fun) it can be to improve your swimming. </p>
                <a className="cta-btn" href="mailto:carina@swimtechsolutions.com">Get Started</a>
                </div>

            </div>
            </section>
            {/* <!-- End Cta Section --> */}

            </AOSClient>
        </>
    )
}