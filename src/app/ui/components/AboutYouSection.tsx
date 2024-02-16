import AOSClient from '@/components/AOSClient';

export default function AboutUsSection () {
    return (
        <>
            <AOSClient>

            {/* <!-- ======= About You Section ======= --> */}
            <section id="about" className="about">
            <div className="container">

                <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
                    <div className="content">
                    <h3>Who are you?</h3>
                    <p>
                        Carina believes that everyone can experience the joy and satisfaction that comes along with improving your swimming. This holds true for beginners, seasoned veterans, competitive swimmers, recreational swimmers, and the many variations along the way. Here are a few examples:
                    </p>
                    </div>
                </div>
                <div className="col-xl-7 d-flex align-items-stretch">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i className="bx bx-swim"></i>
                        <h4>Adult Swimmer</h4>
                        <p>You are either starting out or it&apos;s been a long time since you were a swimmer.</p>
                            <p>Whether you&apos;re learning to swim for the first time, knocking some rust off of the old skills, or looking to simply improve your swimming, we have you covered.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i className="bx bx-cycling"></i>
                        <h4>New Triathlete</h4>
                        <p>You&apos;ve done a few or are planning to do a triathlon in the near future. Maybe mass starts and open water feel a little intimidating.</p>
                            <p>One thing most triathletes would like to have is more endurance. Better swimming technique leads to more efficient, more effortless, swimming. This will leave you feeling great after the swim and ready to excel on your bike.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i className="bx bx-run"></i>
                        <h4>Experienced Triathlete</h4>
                        <p>You&apos;ve done a lot of swims but would like to improve your swimming whether it&apos;s swimming efficiently to save energy, swimming faster, or simply removing the intimidation factor and enjoying your swims.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i className="bx bx-question-mark"></i>
                        <h4>Don&apos;t Fit in a Category</h4>
                        <p>Coach Carina will enthusiastically meet you where you are and help you to achieve the goals that matter to you.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End About You Section --> */}

            </AOSClient>
        </>
    )
}