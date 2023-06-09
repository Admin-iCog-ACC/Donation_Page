import Footer from "../components/Footer";
import LevelsContent from "../components/LevelsContent";
import Nav from "../components/Nav";
import ContentDonate from "../components/ContentDonate";
import Chart from "../components/Chart"
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Required from "../components/forms/Required";


export default function Donate() {
  const [country, setCountry] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [organization, setOrganization] = useState();
  const [level, setLevel] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Replace this with the URL of your API endpoint
      const apiEndpoint = 'http://143.198.179.235:3002/donate';
  
      // Send a POST request to the API endpoint with the form data
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phone,
          organization: organization,
          
        })
      });
  
      if (response.ok) {
        // Handle successful form submission
        alert('Form submitted successfully!');
      } else {
        // Handle error
        const error = await response.json();
        alert(`An error occurred: ${error.message}`);
      }
    } catch (error) {
      // Handle network error
      alert(`An error occurred: ${error.message}`);
    }
  };
  
  

  return (
    <>
      <Nav />

      <div className=" w-[100vw]">
        <div className="md:max-w-[1225px] md:pr-2 lg:mx-auto mx-10 md:mx-20 pb-10 ">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="pt-10 md:pt-24 w-[85%] md:w-[45%] ">
              <p className="lg:text-[25px]  font-semibold text-md text-[#333333] leading-tight ">
                With your gift, anyone can code!
              </p>
              <h3 className="lg:text-[18px] pt-8 text-[#333333] leading-tight ">
              Join our Donation Campaign and make a meaningful contribution towards equipping Ethiopian students 
              with 21st century knowledge through coding training. To achieve this, we are launching a campaign 
              where your donation, starting from $25, can create a substantial difference in the future of one 
              student. </h3>
              <h3 className="lg:text-[18px] pt-3 text-[#333333] leading-tight ">
              Your gift will empower them with valuable skills and open doors of opportunities.
              We are accepting donations through a U.S 5013c organization, so donate today and be a part of 
              transforming lives and shaping the next generation of talented individuals. 
              </h3>
            </div>
            <form
              onSubmit={handleSubmit}
              className=" w-[75%] md:w-[45%] pt-16 flex flex-col gap-2"
            >
              <div className="lg:flex justify-between">
                <Input
                  label="Name"
                  required={true}
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Input
                  label="Email"
                  required={true}
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="lg:flex justify-between">
                <Input
                  label="Phone"
                  name="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <Input
                  label="Organization"
                  name="organization"
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                />
              </div>
              <div className="space-y-3 pt-10">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.paypal.com/donate?hosted_button_id=FRSDVJPK8PE9J",
                      "_blank"
                    )
                  }
                  type="submit"
                  className="md:text-lg text-md text-white px-5 py-3 border-solid  bg-[#178c9f]"
                >
                  Donate Here
                </button>
              </div>

              {/* <div className="md:w-full flex flex-col">
                <label className="label-style ">Country:</label>
                <select
                  name="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="select-style  md:w-2/3 "
                >
                  <option value="">- Select -</option>
                  <option>Ethiopia</option>
                  <option>International</option>
                </select>
              </div>
              {country !== "" &&
                (country === "International" ? (
                  <div className=" w-full flex flex-col">
                    <div className="flex gap-3 z-0 pt-10 w-full">
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: "100",
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                          });
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 pt-10">
                    <button
                      href="https://chapa.link/donation/view/DN-pAzUO0w2ixOM"
                      className="md:text-sm text-md text-white px-5 py-3 border-solid rounded-lg bg-[#42855B]"
                    >
                      Donate With Chapa
                    </button>
                  </div>
                ))} */}
            </form>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1300px] w-full mt-16 pb-20">
        <div className="w-full pt-10">
          <div className="flex justify-center items-center">
            <ContentDonate />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="pt-8">
          <Chart />
        </div>
      </div>

      <div className="lg:max-w-[1300px] lg:pt-14 w-90% mt-16 pb-12 md:mb-10">
        <div className="w-full pt-8">
          <div className="w-[90%]  mx-auto">
            <h2 className="md:text-4xl flex justify-center items-center text-2xl font-bold pb-5">
              About this Course
            </h2>
            <p className="text-lg flex justify-center items-center text-gray-600">
              FUN and EASY introduced to the world of programming Applying
              theoretical knowledge into a problem-solving real-time project{" "}
              <br />
            </p>

            {level !== null && level === 0 && (
              <p className="text-lg flex justify-center items-center text-gray-600 pt-10">
                Level 0: Basic Digital Literacy: The training starts at level 0
                which entails an introduction to basic digital skills such as;
                using the internet, social media usage, sending an email and
                conducting research. Basic digital literacy integrates
                employability and life skills training. This will help them
                develop creative thinking, decision making, critical thinking,
                and effective communication which will in turn insure an
                equipped individual to combat the 21st century technical
                competition demand.
              </p>
            )}

            {level !== null && level === 1 && (
              <p className="text-lg text-gray-600 pt-10">
                {" "}
                Level 1: Programming Scratch: The students will then move to
                Level 1 Basic Scratch. Scratch is a beginner friendly
                block-based programming language developed by MIT. Students will
                utilize Scratch to learn the basics of computer programming by
                creating educational and interactive animations, games, etc.
                Scratch provides a space for students to create, explore, and
                imagine; hence, Students will be more motivated to learn. By the
                end of the training, the students will be evaluated in a
                Continuous Assessment Test (CAT) and will be certified for Level
                1 Basic Scratch.{" "}
              </p>
            )}
          </div>
          <LevelsContent level={level} setLevel={setLevel} />
        </div>
      </div>

      <Footer />
    </>
  );
}

function Input({ label, name, type = "text", required, onChange, value }) {
  return (
    <div>
      <div className=" w-64 flex-1">
        <label className="mt-3 h-6 text-xs label-style">
          {label} {required && <Required />}
        </label>

        <div className="input-div-style">
          <input
            required={required === true}
            type={type}
            onChange={onChange}
            value={value}
            name={name}
            className="input-style"
          />
        </div>
      </div>
    </div>
  );
}


// function FAQCard({ question, answer, isExpanded, onClick }) {
//   return (
//     <div className="shadow-md px-2 py-3" onClick={onClick}>
//       <div className="flex justify-between items-center group">
//         <p className="mb-5">{question}</p>
//         <IoIosArrowDown size={16} className={`${isExpanded && 'rotate-180'}`} />
//       </div>
//       {isExpanded && <p className="transition ">{answer}</p>}
//     </div>
//   );
// }

// function FAQ() {
//   const [expandedQuestions, setExpandedQuestions] = useState({
//     'question 1': false,
//     'question 2': false,
//     'question 3': false,
//     'question 4': false,
//     'question 5': false,
//     'question 6': false,
//     'question 8': false,
//     'question 9': false,
//     'question 10': false,
//   });
//   return (
//     <div className="flex flex-col gap-4">
//       <FAQCard
//         question="Can I donate in a currency other than US dollars?"
//         isExpanded={expandedQuestions['question 1']}
//         answer="Since our donation accounts are sent in Ethiopia and The United States,
//               we only accept donations in US dollars and ETB."
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 1': !expandedQuestions['question 1'],
//           })
//         }
//       />
//       <FAQCard
//         question="Can I cancel my current recurrent donation?"
//         isExpanded={expandedQuestions['question 2']}
//         answer="Yes, you can cancel your recurring donation at any time.
//               Here (Link to cancellation manual) is the exact direction on how
//               to cancel your donation."
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 2': !expandedQuestions['question 2'],
//           })
//         }
//       />
//       <FAQCard
//         question="Where can I find information about how iCog-ACC uses my donation?"
//         isExpanded={expandedQuestions['question 3']}
//         answer="ICog-ACC strives for transparency, all forms of donations go to XX. for more information,
//               please visit - (maybe a link to 'Where is the donation going?' and Who are we supporting?)"
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 3': !expandedQuestions['question 3'],
//           })
//         }
//       />
//       <FAQCard
//         question="Can I make a donation on the phone if I don't want to donate online?"
//         isExpanded={expandedQuestions['question 4']}
//         answer=" Yes, but we do urge you to take advantage of the convenience and security of giving online.
//               You may call us at —-  if you would like to donate by credit card via phone."
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 4': !expandedQuestions['question 4'],
//           })
//         }
//       />

//       <FAQCard
//         question="When can I expect my receipt?"
//         isExpanded={expandedQuestions['question 5']}
//         answer="You will receive your tax receipt immediately upon —- receipt of your donation."
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 5': !expandedQuestions['question 5'],
//           })
//         }
//       />

//       <FAQCard
//         question="Do I need a PayPal account to make a donation from the website?"
//         isExpanded={expandedQuestions['question 6']}
//         answer="No, you do not need a PayPal account to make a donation.
//         Online donations can be made using a personal credit or debit card.
//         Those that have a PayPal account may use that account to make a donation. "
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 6': !expandedQuestions['question 6'],
//           })
//         }
//       />

//       <FAQCard
//         question="Are there any advantages if I use my PayPal account?"
//         isExpanded={expandedQuestions['question 7']}
//         answer=":Convenience is the primary advantage.
//         If you have a PayPal account, you don’t need to repeatedly
//         enter credit card information."
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 7': !expandedQuestions['question 7'],
//           })
//         }
//       />

//       <FAQCard
//         question="I noticed donation amounts when I clicked on a donation button. What do these amounts represent?"
//         isExpanded={expandedQuestions['question 8']}
//         answer="The amounts shown on each of the donation pages are included for convenience and are suggested donation amounts only.
//         You can specify a donation amount you are comfortable with from any of the donation buttons. "
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 8': !expandedQuestions['question 8'],
//           })
//         }
//       />

//       <FAQCard
//         question="Do I need a PayPal account to make a donation from the website?"
//         isExpanded={expandedQuestions['question 9']}
//         answer="No, you do not need a PayPal account to make a donation.
//         Online donations can be made using a personal credit or debit card.
//         Those that have a PayPal account may use that account to make a donation. "
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 9': !expandedQuestions['question 9'],
//           })
//         }
//       />
//       <FAQCard
//         question="Can I donate an amount that is different from the suggested donation amounts?"
//         isExpanded={expandedQuestions['question 10']}
//         answer="Yes, each of the donation pages includes, in addition to the suggested donation amounts,
//         a box to enter a donation amount of your preference. With gratitude, all donations are sincerely appreciated.  "
//         onClick={() =>
//           setExpandedQuestions({
//             ...expandedQuestions,
//             'question 10': !expandedQuestions['question 10'],
//           })
//         }
//       />
//     </div>
//   );
// }
