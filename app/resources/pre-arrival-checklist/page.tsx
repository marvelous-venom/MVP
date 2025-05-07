"use client";
import React, { FC, ReactNode, useState } from "react";
import {
  FaCheck,
  FaRegSquare,
  FaInfoCircle,
  FaDownload,
  FaExclamationTriangle,
} from "react-icons/fa";
import { IconType } from "react-icons";
import ResourceLayout from "@/app/components/layout/ResourceLayout";

// Checklist Item Component
interface ChecklistItemProps {
  children: ReactNode;
  initialChecked?: boolean;
}

// Component for individual checklist items with toggle functionality
const ChecklistItem: FC<ChecklistItemProps> = ({
  children,
  initialChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  return (
    <div className="flex items-start mb-2">
      <button
        onClick={() => setIsChecked(!isChecked)}
        className="flex-shrink-0 mt-0.5 mr-2 text-gray-400 hover:text-blue-500 focus:outline-none"
        aria-label={isChecked ? "Mark as incomplete" : "Mark as complete"}
      >
        {isChecked ? (
          <FaCheck className="h-5 w-5 text-green-500" />
        ) : (
          <FaRegSquare className="h-5 w-5" />
        )}
      </button>
      <span
        className={`${
          isChecked ? "text-gray-500 line-through" : "text-gray-900"
        }`}
      >
        {children}
      </span>
    </div>
  );
};

// Collapsible Section Component
interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  icon?: IconType;
}

// Component for creating a collapsible section
const CollapsibleSection: FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-lg font-semibold text-gray-900 focus:outline-none"
      >
        <span>{title}</span>
        <svg
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

// Info Box Component
interface InfoBoxProps {
  children: ReactNode;
  type?: "info" | "warning";
  title?: string;
}

// Info box component for tips and important information
const InfoBox: FC<InfoBoxProps> = ({ children, type = "info" }) => {
  const bgColor = type === "warning" ? "bg-yellow-50" : "bg-blue-50";
  const textColor = type === "warning" ? "text-yellow-800" : "text-blue-800";
  const borderColor =
    type === "warning" ? "border-yellow-200" : "border-blue-200";
  const Icon = type === "warning" ? FaExclamationTriangle : FaInfoCircle;
  const iconColor = type === "warning" ? "text-yellow-500" : "text-blue-500";

  return (
    <div className={`${bgColor} ${borderColor} border rounded-md p-4 mb-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div className={`ml-3 ${textColor}`}>{children}</div>
      </div>
    </div>
  );
};

const PreArrivalChecklist = () => {
  return (
    <ResourceLayout
      title="USA Pre-Arrival Checklist for International Students"
      description="Essential steps to complete before leaving your home country for studies in the United States."
      category="Checklist"
      lastUpdated="April 28, 2025"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Your Pre-Arrival Checklist
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <FaDownload className="mr-2 h-4 w-4" />
            Download PDF
          </button>
        </div>

        <p className="mt-4 text-gray-600">
          Use this checklist to stay organized as you prepare for your journey
          to study in the United States. Track your progress by checking off
          items as you complete them.
        </p>
      </div>

      <InfoBox>
        <h4 className="text-sm font-medium">Key Deadlines to Remember</h4>
        <p className="text-sm">
          US visa appointments can take weeks or months to schedule, especially
          during peak seasons (May-August). Start your visa application process
          at least 3-4 months before your program start date.
        </p>
      </InfoBox>

      <CollapsibleSection title="6+ Months Before Departure">
        <div className="pl-2 space-y-1">
          <ChecklistItem>Research US universities and programs</ChecklistItem>
          <ChecklistItem>
            Take required standardized tests (TOEFL, IELTS, GRE, GMAT, SAT, ACT
            as applicable)
          </ChecklistItem>
          <ChecklistItem>Apply to universities</ChecklistItem>
          <ChecklistItem>
            Apply for scholarships and financial aid (note that options may be
            limited for international students)
          </ChecklistItem>
          <ChecklistItem>
            Research accommodation options (on-campus housing vs. off-campus
            apartments)
          </ChecklistItem>
          <ChecklistItem>
            Begin researching F-1 or J-1 student visa requirements
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="3-6 Months Before Departure">
        <div className="pl-2 space-y-1">
          <ChecklistItem>Accept university admission offer</ChecklistItem>
          <ChecklistItem>
            Receive I-20 (for F-1 visa) or DS-2019 (for J-1 visa) from your
            university
          </ChecklistItem>
          <ChecklistItem>
            Pay SEVIS fee ($350 for F-1, $220 for J-1) at FMJfee.com
          </ChecklistItem>
          <ChecklistItem>Apply for your student visa</ChecklistItem>
          <ChecklistItem>
            Complete Form DS-160 (Online Nonimmigrant Visa Application)
          </ChecklistItem>
          <ChecklistItem>Pay visa application fee ($160)</ChecklistItem>
          <ChecklistItem>
            Schedule visa interview at US Embassy or Consulate
          </ChecklistItem>
          <ChecklistItem>
            Prepare financial documents showing sufficient funds for your
            studies
          </ChecklistItem>
          <ChecklistItem>Prepare for visa interview</ChecklistItem>
          <ChecklistItem>
            Research health insurance options (most US universities require
            coverage)
          </ChecklistItem>
          <ChecklistItem>Get medical and dental check-ups</ChecklistItem>
          <ChecklistItem>
            Get necessary vaccinations required by your university
          </ChecklistItem>
          <ChecklistItem>
            Apply for on-campus housing or research off-campus options
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="1-3 Months Before Departure">
        <div className="pl-2 space-y-1">
          <ChecklistItem>Book your flight</ChecklistItem>
          <ChecklistItem>
            Arrange airport pickup through university, friends, or
            transportation services
          </ChecklistItem>
          <ChecklistItem>
            Purchase health insurance that meets university requirements
          </ChecklistItem>
          <ChecklistItem>Organize required documents</ChecklistItem>
          <ChecklistItem>
            Valid passport (with at least 6 months validity beyond your planned
            stay)
          </ChecklistItem>
          <ChecklistItem>F-1/J-1 visa</ChecklistItem>
          <ChecklistItem>I-20 or DS-2019 form</ChecklistItem>
          <ChecklistItem>SEVIS fee payment receipt</ChecklistItem>
          <ChecklistItem>University acceptance letter</ChecklistItem>
          <ChecklistItem>Financial documents</ChecklistItem>
          <ChecklistItem>Academic transcripts and diplomas</ChecklistItem>
          <ChecklistItem>
            Research US banking options for international students
          </ChecklistItem>
          <ChecklistItem>
            Research US mobile phone/SIM card options
          </ChecklistItem>
          <ChecklistItem>
            Make copies of important documents (physical and digital)
          </ChecklistItem>
          <ChecklistItem>
            Create a budget in US dollars for your first semester
          </ChecklistItem>
          <ChecklistItem>
            Research student discounts (International Student Identity Card,
            Amazon Prime Student, etc.)
          </ChecklistItem>
          <ChecklistItem>
            Join social media groups for international students at your
            university
          </ChecklistItem>
          <ChecklistItem>
            Research US academic customs and expectations
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="2-4 Weeks Before Departure">
        <div className="pl-2 space-y-1">
          <ChecklistItem>
            Pay tuition fees (first semester if applicable)
          </ChecklistItem>
          <ChecklistItem>Check baggage allowance for your flight</ChecklistItem>
          <ChecklistItem>
            Create a packing list with items appropriate for your US
            destination&apos;s climate
          </ChecklistItem>
          <ChecklistItem>Pack essential items</ChecklistItem>
          <ChecklistItem>
            Clothing appropriate for the local climate
          </ChecklistItem>
          <ChecklistItem>
            Adapters for US electrical outlets (120V, Type A/B plugs)
          </ChecklistItem>
          <ChecklistItem>
            Medications (with doctor&apos;s letter for prescription medications)
          </ChecklistItem>
          <ChecklistItem>Cultural items from your home country</ChecklistItem>
          <ChecklistItem>Academic materials</ChecklistItem>
          <ChecklistItem>
            Important documents (originals and copies)
          </ChecklistItem>
          <ChecklistItem>Notify your bank of your travel plans</ChecklistItem>
          <ChecklistItem>
            Exchange some US dollars for immediate expenses ($200-300
            recommended)
          </ChecklistItem>
          <ChecklistItem>
            Research how to send money between your home country and the US
          </ChecklistItem>
          <ChecklistItem>
            Set up communication apps on your phone (WhatsApp, WeChat, etc.)
          </ChecklistItem>
          <ChecklistItem>
            Share your itinerary with family and emergency contacts
          </ChecklistItem>
          <ChecklistItem>
            Research transportation from your arrival airport to campus
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="1 Week Before Departure">
        <div className="pl-2 space-y-1">
          <ChecklistItem>Check in for your flight</ChecklistItem>
          <ChecklistItem>Confirm your accommodation arrangements</ChecklistItem>
          <ChecklistItem>Finalize airport pickup details</ChecklistItem>
          <ChecklistItem>Download useful apps</ChecklistItem>
          <ChecklistItem>
            Google Maps (with offline maps of your campus area)
          </ChecklistItem>
          <ChecklistItem>Uber/Lyft for transportation</ChecklistItem>
          <ChecklistItem>University app (if available)</ChecklistItem>
          <ChecklistItem>Banking apps</ChecklistItem>
          <ChecklistItem>Currency converter</ChecklistItem>
          <ChecklistItem>
            Venmo/Zelle/Cash App (popular payment apps in the US)
          </ChecklistItem>
          <ChecklistItem>Pack a carry-on with essentials</ChecklistItem>
          <ChecklistItem>Passport and visa documents</ChecklistItem>
          <ChecklistItem>I-20 or DS-2019 form</ChecklistItem>
          <ChecklistItem>SEVIS fee payment receipt</ChecklistItem>
          <ChecklistItem>University acceptance letter</ChecklistItem>
          <ChecklistItem>Housing confirmation</ChecklistItem>
          <ChecklistItem>
            Contact information for university international office
          </ChecklistItem>
          <ChecklistItem>US dollars</ChecklistItem>
          <ChecklistItem>
            Medications (in original packaging with prescriptions)
          </ChecklistItem>
          <ChecklistItem>Phone and charger</ChecklistItem>
          <ChecklistItem>
            Verify international roaming on your phone or plan to buy a US SIM
            card
          </ChecklistItem>
          <ChecklistItem>
            Familiarize yourself with US customs regulations
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Immediately After Arrival in the US">
        <div className="pl-2 space-y-1">
          <ChecklistItem>
            Go through US Customs and Border Protection
          </ChecklistItem>
          <ChecklistItem>
            Present passport, visa, I-20/DS-2019, and SEVIS fee receipt
          </ChecklistItem>
          <ChecklistItem>
            Complete Form I-94 (usually electronic now)
          </ChecklistItem>
          <ChecklistItem>
            Call or message family to confirm safe arrival
          </ChecklistItem>
          <ChecklistItem>
            Get a US SIM card or activate an international plan
          </ChecklistItem>
          <ChecklistItem>
            Visit the international student office at your university
          </ChecklistItem>
          <ChecklistItem>
            Attend orientation and immigration check-in sessions
          </ChecklistItem>
          <ChecklistItem>
            Complete SEVIS registration (required within 30 days of program
            start date)
          </ChecklistItem>
          <ChecklistItem>Open a US bank account</ChecklistItem>
          <ChecklistItem>Explore the campus and local area</ChecklistItem>
          <ChecklistItem>
            Meet with your academic advisor to confirm course registration
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Important Documents for US Study">
        <div className="pl-2 space-y-1">
          <ChecklistItem>
            Valid passport (with at least 6 months validity)
          </ChecklistItem>
          <ChecklistItem>F-1 or J-1 student visa</ChecklistItem>
          <ChecklistItem>I-20 or DS-2019 form</ChecklistItem>
          <ChecklistItem>SEVIS fee payment receipt</ChecklistItem>
          <ChecklistItem>
            University acceptance letter and any correspondence
          </ChecklistItem>
          <ChecklistItem>
            Scholarship award letters (if applicable)
          </ChecklistItem>
          <ChecklistItem>
            Academic documents (original and translated)
          </ChecklistItem>
          <ChecklistItem>Health insurance documentation</ChecklistItem>
          <ChecklistItem>Immunization records</ChecklistItem>
          <ChecklistItem>
            Medical prescriptions and doctor&apos;s notes
          </ChecklistItem>
          <ChecklistItem>
            International driver&apos;s license (if planning to drive)
          </ChecklistItem>
          <ChecklistItem>
            Credit cards (Visa/Mastercard have highest acceptance)
          </ChecklistItem>
        </div>
      </CollapsibleSection>

      <InfoBox type="warning">
        <h4 className="text-sm font-medium">Important Visa Reminder</h4>
        <p className="text-sm">
          Do not enter the US more than 30 days before your program start date
          on your I-20/DS-2019. F-1/J-1 regulations do not permit earlier entry.
        </p>
      </InfoBox>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Need Help with Your Preparation?
        </h3>
        <p className="mt-2 text-gray-600">
          Our experienced advisors are ready to assist you with any questions
          about preparing for your studies in the USA.
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Schedule a Consultation →
          </a>
        </div>
      </div>
    </ResourceLayout>
  );
};

export default PreArrivalChecklist;
