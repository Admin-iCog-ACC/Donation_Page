import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Chart from '../components/Chart';
import ContentDonate from '../components/ContentDonate';
import LevelsContent from '../components/LevelsContent';
import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaChild } from 'react-icons/fa';
import { SiTrainerroad } from 'react-icons/si';
import { MdReduceCapacity } from 'react-icons/md';
import React from 'react';
import Required from '../components/forms/Required';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

export default function Donate() {
  const [country, setCountry] = useState('');
  const [level, setLevel] = useState(null);

  return (
    <>
      <Nav />
      <div className="relative h-28 md:h-80 ">
        <Image
          src="/FormFinal.png"
          className=""
          layout="fill"
          objectFit="fill"
          alt=""
        />
      </div>
      <div className="helpus-bg w-[100vw]">
        <div className="md:max-w-[1225px] lg:mx-auto mx-10 md:mx-20 pb-10 ">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="pt-10 md:pt-24 w-[75%] md:w-[40%] ">
              <p className="lg:text-[25px]  font-semibold text-sm text-[#333333] leading-tight ">
                With your gift, anyone can code!
              </p>
              <h3 className="lg:text-[18px] pt-8 text-[#333333] leading-tight ">
                Our New Year’s donation campaign is an opportunity for you to
                give a gift for a student and make your contribution in building
                their soft skill and technical knowledge. With your gift, In the
                coming Ethiopian New year 2015, we plan to teach 100 students
                across 4 cities in Ethiopia in giving 100hrs of coding training.
                Hence, we are launching our first ever donation campaign, in
                which $100 can cover a student's full training session.
              </h3>
            </div>
            <div className=" w-[75%] md:w-[45%] pt-16 flex flex-col gap-2">
              <div className="lg:flex justify-between">
                <Input label="Name" required={true} name="name" />
                <Input
                  label="Email"
                  name="email"
                  required={true}
                  type="Email"
                />
              </div>
              <div className="lg:flex justify-between">
                <Input label="Phone" name="Phone" />
                <Input label="Organization" name="organization" />
              </div>
              <div className="md:w-full w-60 flex flex-col">
                <label className="label-style ">Country:</label>
                <select
                  name="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="select-style md:w-2/3"
                >
                  <option value="">- Select -</option>
                  <option>Ethiopia</option>
                  <option>International</option>
                </select>
              </div>
              {country !== '' &&
                (country === 'International' ? (
                  <div className=" w-full flex flex-col">
                    <div className="flex gap-3 z-0 pt-10 w-full">
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: '100',
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
                    <a
                      href="https://chapa.link/donation/view/DN-n28e7cvBTfp9"
                      className="text-xl text-white px-10 py-3 rounded bg-[#42855B]"
                    >
                      Donate With Chapa
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-[100vmax] bg-[#f6f9ff] lg:mx-auto mt-3 ">
        <div className="flex flex-col md:justify-items-center gap-1">
          <div className="pt-4 w-full mb-16">
            <p className="lg:text-[30px] pt-8 text-lg text-center font-semibold text-[#333333] leading-tight ">
              Where is the donation going?
            </p>
            <div className="flex flex-col md:flex-row items-center md:pl-24 pt-7">
              <div className="md:w-80 w-72 ">
                <Chart />
              </div>

              <div className="md:w-[50%] pt-9 md:pt-0 w-96 md:ml-5 lg:ml-16">
                <div className="pt-9 md:ml-5 flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="h-7 w-7 rounded-full flex md:items-center">
                      <FaChild />
                    </div>
                    <div>
                      <p className="font-bold">Sustainability</p>
                      <p>Coding club and Maintenance.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-7 w-7 rounded-full flex items-center">
                      <MdReduceCapacity />
                    </div>
                    <div>
                      <p className="font-bold">Capacity building</p>
                      <p>Training of Trainers.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-7 w-7 rounded-full flex items-center">
                      <SiTrainerroad />
                    </div>
                    <div>
                      <p className="font-bold">Training</p>
                      <p>M&E and Trainer fee.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[35%] pl-7 md:pl-0 pt-9 w-full md:pr-24">
                <div className="relative md:h-[200px] pt-16 h-36 w-full">
                  <Image
                    src="/finalGif.gif"
                    className=" rounded-md"
                    layout="fill"
                    objectFit="fill"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1225px] w-full shadow-md lg:mx-auto mt-16 pb-20">
        <div className="w-full pt-10">
          <div className="">
            <ContentDonate />
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1225px]  w-full shadow-md md:mx-auto mt-16 pb-12 md:mb-10">
        <div className="w-full pt-8">
          <div className="w-[90%] mx-auto">
            <h2 className="lg:text-[30px] text-2xl pb-5 font-bold leading-tight ">
              About this Course
            </h2>
            <p className="text-lg text-gray-600">
              FUN and EASY introduced to the world of programming Applying
              theoretical knowledge into a problem-solving real-time project{' '}
              <br />
            </p>

            {level !== null && level === 0 && (
              <p className="text-lg text-gray-600 pt-10">
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
                {' '}
                Level 1: Programming Scratch: The students will then move to
                Level 1 Basic Scratch. Scratch is a beginner friendly
                block-based programming language developed by MIT. Students will
                utilize Scratch to learn the basics of computer programming by
                creating educational and interactive animations, games, etc.
                Scratch provides a space for students to create, explore, and
                imagine; hence, Students will be more motivated to learn. By the
                end of the training, the students will be evaluated in a
                Continuous Assessment Test (CAT) and will be certified for Level
                1 Basic Scratch.{' '}
              </p>
            )}
          </div>
          <LevelsContent level={level} setLevel={setLevel} />
        </div>
      </div>
      <div className="md:max-w-[1225px] w-[90%]  mx-auto bg-[#f6f9ff] shadow-md py-10 mb-10">
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
          <div className="space-y-3 py-6">
            <h2 className="md:text-4xl text-2xl font-bold pb-5">Impact </h2>
            <p className="text-lg text-gray-600">
              The School network is one wing of the Tech-Education programs that
              we do, where we are giving our training to students on their
              after-school programs, weekends and during school breaks by
              utilizing their school’s ICT laboratories to conduct training.
              With 5+ years of experience implementing this type of project, we
              have impacted over 1200 public school students in 20 public
              schools in 8 cities of Ethiopia.
            </p>
          </div>
          <div className="relative md:h-200 md:w-200">
            <Image src="/impact.jpg" layout="fill" objectFit="contain" alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-[1225px]  lg:mx-auto mb-3">
        <h1 className="lg:text-[35px] pt-5 text-[20px] text-center lg:text-left  font-bold">
          Freqently Asked Questions
        </h1>
        <div className="pt-7">
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Input({ label, name, type = 'text', required, onchange, value }) {
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
            onChange={onchange}
            value={value}
            name={name}
            className="input-style"
          />
        </div>
      </div>
    </div>
  );
}

function FAQCard({ question, answer, isExpanded, onClick }) {
  return (
    <div className="shadow-md px-2 py-3" onClick={onClick}>
      <div className="flex justify-between items-center group">
        <p className="mb-5">{question}</p>
        <IoIosArrowDown size={16} className={`${isExpanded && 'rotate-180'}`} />
      </div>
      {isExpanded && <p className="transition ">{answer}</p>}
    </div>
  );
}

function FAQ() {
  const [expandedQuestions, setExpandedQuestions] = useState({
    'question 1': false,
    'question 2': false,
    'question 3': false,
    'question 4': false,
    'question 5': false,
    'question 6': false,
    'question 8': false,
    'question 9': false,
    'question 10': false,
  });
  return (
    <div className="flex flex-col gap-4">
      <FAQCard
        question="Can I donate in a currency other than US dollars?"
        isExpanded={expandedQuestions['question 1']}
        answer="Since our donation accounts are sent in Ethiopia and The United States, 
              we only accept donations in US dollars and ETB."
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 1': !expandedQuestions['question 1'],
          })
        }
      />
      <FAQCard
        question="Can I cancel my current recurrent donation?"
        isExpanded={expandedQuestions['question 2']}
        answer="Yes, you can cancel your recurring donation at any time. 
              Here (Link to cancellation manual) is the exact direction on how 
              to cancel your donation."
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 2': !expandedQuestions['question 2'],
          })
        }
      />
      <FAQCard
        question="Where can I find information about how iCog-ACC uses my donation?"
        isExpanded={expandedQuestions['question 3']}
        answer="ICog-ACC strives for transparency, all forms of donations go to XX. for more information, 
              please visit - (maybe a link to 'Where is the donation going?' and Who are we supporting?)"
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 3': !expandedQuestions['question 3'],
          })
        }
      />
      <FAQCard
        question="Can I make a donation on the phone if I don't want to donate online?"
        isExpanded={expandedQuestions['question 4']}
        answer=" Yes, but we do urge you to take advantage of the convenience and security of giving online. 
              You may call us at —-  if you would like to donate by credit card via phone."
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 4': !expandedQuestions['question 4'],
          })
        }
      />

      <FAQCard
        question="When can I expect my receipt?"
        isExpanded={expandedQuestions['question 5']}
        answer="You will receive your tax receipt immediately upon —- receipt of your donation."
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 5': !expandedQuestions['question 5'],
          })
        }
      />

      <FAQCard
        question="Do I need a PayPal account to make a donation from the website?"
        isExpanded={expandedQuestions['question 6']}
        answer="No, you do not need a PayPal account to make a donation. 
        Online donations can be made using a personal credit or debit card. 
        Those that have a PayPal account may use that account to make a donation. "
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 6': !expandedQuestions['question 6'],
          })
        }
      />

      <FAQCard
        question="Are there any advantages if I use my PayPal account?"
        isExpanded={expandedQuestions['question 7']}
        answer=":Convenience is the primary advantage. 
        If you have a PayPal account, you don’t need to repeatedly 
        enter credit card information."
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 7': !expandedQuestions['question 7'],
          })
        }
      />

      <FAQCard
        question="I noticed donation amounts when I clicked on a donation button. What do these amounts represent?"
        isExpanded={expandedQuestions['question 8']}
        answer="The amounts shown on each of the donation pages are included for convenience and are suggested donation amounts only. 
        You can specify a donation amount you are comfortable with from any of the donation buttons. "
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 8': !expandedQuestions['question 8'],
          })
        }
      />

      <FAQCard
        question="Do I need a PayPal account to make a donation from the website?"
        isExpanded={expandedQuestions['question 9']}
        answer="No, you do not need a PayPal account to make a donation. 
        Online donations can be made using a personal credit or debit card. 
        Those that have a PayPal account may use that account to make a donation. "
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 9': !expandedQuestions['question 9'],
          })
        }
      />
      <FAQCard
        question="Can I donate an amount that is different from the suggested donation amounts?"
        isExpanded={expandedQuestions['question 10']}
        answer="Yes, each of the donation pages includes, in addition to the suggested donation amounts, 
        a box to enter a donation amount of your preference. With gratitude, all donations are sincerely appreciated.  "
        onClick={() =>
          setExpandedQuestions({
            ...expandedQuestions,
            'question 10': !expandedQuestions['question 10'],
          })
        }
      />
    </div>
  );
}
