import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const IndexPage = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <Layout>
      <section className={styles.header} data-aos="slide-right">
        <div className={styles.container}>
          <div className={styles.left}>
            About Me
            <hr></hr>
            <div>
              <h4>
                Student at the University of Toronto
                <br />
                B.A.Sc, Computer Engineering
                <br />
                Minor, Artificial Intelligence Engineering
                <br /> seongjooyoon@gmail.com | seongjoo.yoon@mail.utoronto.ca
                <br />
                <a
                  href="/vector_cert_seongjooyoon.pdf"
                  id={styles.resume_file}
                  download
                >
                  resume_seongjooyoon.pdf
                </a>
              </h4>
            </div>
            <img className={styles.dp} src="/github.png" alt=""></img>
            <div className="intro">
              <p>
                Hi, I'm an incoming 3rd year computer engineering student at the
                University of Toronto. I took the previous academic year
                (2021.09~2022.05) off to intern at a startup company in Seoul,
                and will return for Fall 2022. I was able to see how AI and web
                development are applied in industry,
              </p>
            </div>
            <div className={styles.contactlinks}>
              <a
                href="https://github.com/seongjooy"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.snsbutton} src="/github.png" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.snsbutton} src="/linkedin.png" alt="" />
              </a>
              <a
                href="https://www.instagram.com/_seongjoo/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.snsbutton} src="/instagram.png" alt="" />
              </a>
              <a
                href="https://www.facebook.com/stephanseongjoo/"
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.snsbutton} src="/facebook.png" alt="" />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.displaycontent}>
              <h2>
                Toronto, Ontario, Canada.
                <h5>
                  University of Toronto @ St. George, Toronto. (2019~) <br />
                </h5>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <br /> Madrid, Spain.
                <h5>
                  American School of Madrid, Pozuelo de Alarcón. (2017~2019)
                </h5>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <br /> Seoul, South Korea.
                <h5>Seoul Foriegn School, Seoul. (2014~2017)</h5>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <br /> Istanbul, Turkey.
                <h5>MEF International School, Ortaköy. (2011~2014)</h5>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <img className={styles.photos} src="/email.png" alt=""></img>
                <br />
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
