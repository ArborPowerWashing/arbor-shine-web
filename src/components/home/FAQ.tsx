
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "What is the difference between pressure washing and soft washing?",
    answer:
      "Pressure washing uses high-pressure water to remove dirt and grime, ideal for concrete, brick, and other hard surfaces. Soft washing uses low pressure with specialized cleaning solutions, making it safer for delicate surfaces like roofs, vinyl siding, and painted surfaces. We use the appropriate technique for each surface to ensure effective cleaning without causing damage."
  },
  {
    id: 2,
    question: "Is power washing safe for all surfaces?",
    answer:
      "No, not all surfaces can withstand traditional high-pressure washing. We assess each surface and use appropriate techniques - high pressure for durable surfaces like concrete, and soft washing for more delicate surfaces like roofs and vinyl siding. Our technicians are trained to choose the right approach for your specific needs."
  },
  {
    id: 3,
    question: "How long does a typical power washing service take?",
    answer:
      "Service times vary depending on the size of the area and level of soiling. A typical residential driveway might take 1-2 hours, while a full house exterior could take 3-4 hours. Commercial properties may require longer. We provide specific time estimates when quoting your project."
  },
  {
    id: 4,
    question: "Are your cleaning products safe for plants and pets?",
    answer:
      "Yes, we use environmentally responsible cleaning products that are effective on dirt and grime but safe for your landscaping, pets, and family when used as directed. Our technicians take precautions to protect surrounding plants and minimize any potential impact on your garden."
  },
  {
    id: 5,
    question: "How often should I have my home power washed?",
    answer:
      "Most homeowners benefit from annual exterior cleaning. However, factors like your property's location, tree coverage, climate, and local conditions can influence this schedule. Properties in humid areas or those surrounded by trees may require more frequent cleaning to prevent mold and mildew growth."
  },
  {
    id: 6,
    question: "Do you offer any guarantees on your services?",
    answer:
      "Yes, we stand behind our work with a satisfaction guarantee. If you're not completely satisfied with our service, we'll return and address your concerns at no additional cost. We also provide clear expectations about results during our initial consultation."
  }
];

const FAQ = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="py-16 bg-arbor-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about our power washing services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-medium text-lg text-arbor-dark">
                  {item.question}
                </span>
                {openItemId === item.id ? (
                  <ChevronUp className="text-arbor-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-arbor-primary flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItemId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
