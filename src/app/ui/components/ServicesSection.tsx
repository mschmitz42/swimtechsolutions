import AOSClient from '@/components/AOSClient';

export default function ServicesSection () {
    return (
        <>
            <AOSClient>

            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" className="services">
            <div className="container">

            <div className="section-title" data-aos="fade-in" data-aos-delay="100">
            <h2>Services</h2>
            <p>We offer swim coaching in a variety of formats to fit your situation and maximize the benefits you get from working with us.</p>
            </div>

            <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up">
                <div className="icon"><i className="bx bx-water"></i></div>
                <h4 className="title"><a href="">Pool Sessions</a></h4>
                <p className="description">You&apos;ll have a coach on deck to help you evaluate where you are and how you can meet your swimming goals</p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className="bx bx-video"></i></div>
                <h4 className="title"><a href="">Pool Sessions with Underwater Video</a></h4>
                <p className="description">Underwater video is the best way to give you and your coach usable feedback on areas that are hard or impossible to spot from above.</p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bx bx-water"></i></div>
                <h4 className="title"><a href="">Open water Sessions</a></h4>
                <p className="description">Learn and practice skills that will help your open water swimming</p>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="bx bx-customize"></i></div>
                <h4 className="title"><a href="">Customized Sessions</a></h4>
                <p className="description">Any combination of pool or open water work with or without video that meets your needs</p>
                </div>
            </div>

            </div>

            </div>
            </section>
            {/* <!-- End Services Section --> */}

            </AOSClient>
        </>
    )
}