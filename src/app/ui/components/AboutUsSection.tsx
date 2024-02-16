import AOSClient from '@/components/AOSClient';

export default function AboutUsSection () {
    return (
        <>
            <AOSClient>

            {/* <!-- ======= About UsSection ======= --> */}
            <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
                    <div className="content">
                    <h3>Who is Coach Carina?</h3>
                    <p>
                        As a lifelong swimmer and current triathlete, coach Carina Peritore knows what it takes to swim well and, most importantly, to really enjoy swimming. Here are some of the ways her experience and mindset can help:
                    </p>
                    </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i className="bx bx-cycling"></i>
                        <h4>Sacramento Triathlon Club</h4>
                        <p>As an active STC member, she trains and races in the same events that you do. She&apos;s had the same fears and overcome the same obstacles that you likely face.</p>
                            <p>If you compete in a Northern California triathlon, you&apos;ll likely see coach Carina at the race.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i className="bx bx-swim"></i>
                        <h4>NCAA All American Swimmer</h4>
                            <p>Coach Carina was an NCAA Division III All American at UC Santa Cruz where she swam competitively for 4 years.</p>
                            <p>She will take what she learned from the best coaches and put that to work for you.</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i className="bx bx-water"></i>
                        <h4>Masters Swimmer</h4>
                        <p>As a masters swimmer since college who still swims actively with Sacramento Masters, Carina is constantly improving her swimming and coaching skills through regular workouts and coaching clinics.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i className="bx bx-cool"></i>
                        <h4>Water Polo Player</h4>
                        <p>Are triathlon mass starts and open water navigation intimidating? Let Carina teach you some of the water polo skills that she uses to thrive in these situations.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End About Us Section --> */}

            </AOSClient>
        </>
    )
}