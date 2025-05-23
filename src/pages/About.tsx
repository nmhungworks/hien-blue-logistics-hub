
import Layout from '../components/layout/Layout';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const experiences = [
    "3 years of experience in international logistics",
    "Sea freight specialist with expertise in cost optimization",
    "Air freight coordination for time-sensitive deliveries",
    "Supply chain management and problem solving",
    "Client relationship management and custom solutions",
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-logistics-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Nguyễn Thị Thu Hiền</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dedicated logistics professional with expertise in sea freight, air freight, and cost optimization
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Nguyễn Thị Thu Hiền" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Professional Profile</h2>
              <p className="text-gray-600 mb-6">
                With 3 years of experience in international logistics, I specialize in sea freight, air freight, and cost optimization solutions. My goal is to help customers save costs and enhance their operational efficiency through tailored logistics services.
              </p>

              <h3 className="text-xl font-bold mb-3">Experience & Expertise</h3>
              <ul className="space-y-2 mb-6">
                {experiences.map((experience, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-logistics-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-logistics-500 hover:text-logistics-600 transition-custom">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Philosophy Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Philosophy</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                My approach to logistics is centered around creating value for clients through:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-lg">Cost Optimization</h3>
                    <p className="text-gray-600">Identifying the most cost-effective shipping solutions without compromising on quality or speed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-lg">Operational Efficiency</h3>
                    <p className="text-gray-600">Streamlining logistics processes to reduce delays and improve supply chain performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-lg">Customer-Centric Solutions</h3>
                    <p className="text-gray-600">Tailoring logistics services to meet the specific needs and challenges of each client.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-logistics-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-bold text-lg">Continuous Improvement</h3>
                    <p className="text-gray-600">Constantly seeking ways to improve service quality and adapt to changing market conditions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
