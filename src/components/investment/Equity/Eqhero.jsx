import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../../../public/images/equityhero.png";

export default () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div>
        <section className="pt-12 bg-gradient-to-b from-white via-white to-gray-50">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
              {/* Left Side - Title & Description */}
              <div className="self-center lg:col-span-4" data-aos="fade-up">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                  What is Equity?
                </h1>
                <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                  Equity investment means buying shares (stocks) of a company, giving you partial ownership. As the company grows, the stock price may increase, allowing you to make a profit.
                </p>
              </div>

              {/* Right Side - Benefits List */}
              <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                <p
                  className="text-xs font-bold tracking-widest text-gray-500 uppercase"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  ⚡️ Why invest in Equity
                </p>

                <div className="mt-6 space-y-6 lg:space-y-8">
                  <div className="relative overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/premium-photo/green-red-trading-financial-candlesticks-pattern-chart-front-modern-laptop-notebook-computer-white-background-3d-rendering_476612-25317.jpg?uid=R188284410&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          High Return Potential 🚀
                          <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden" data-aos="zoom-in" data-aos-delay="500">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/premium-photo/businessman-holding-jar-full-golden-coins-with-plant-growing-out-representing-investment-success_9083-24558.jpg?uid=R188284410&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          Passive Income through Dividends 💵
                          <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden" data-aos="zoom-in" data-aos-delay="700">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-12 h-12 rounded-lg shrink-0"
                        src="https://img.freepik.com/premium-vector/vector-illustration-income-from-investment-return-with-businessman-with-percentage-sign-symbol_675567-1965.jpg?uid=R188284410&ga=GA1.1.475042653.1738300675&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <a href="#" title="">
                          Inflation Beating Investment 🔥
                          <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="self-end lg:col-span-5" data-aos="fade-left">
                <img className=" mx-auto" src={hero} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
