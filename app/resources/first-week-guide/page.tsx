"use client";

import ResourceLayout from "@/app/components/layout/ResourceLayout";
import React, { FC, ReactNode, useState } from "react";
import { IconType } from "react-icons";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaDownload,
  FaMapMarkerAlt,
  FaGlobe,
  FaShieldAlt,
  FaUtensils,
  FaUniversity,
  FaWifi,
  FaMobileAlt,
} from "react-icons/fa";
// Info Box Component
interface InfoBoxProps {
  children: ReactNode;
  type?: "info" | "warning";
  title?: string;
}

// Info box component for tips and important information
const InfoBox: FC<InfoBoxProps> = ({ children, type = "info", title }) => {
  const bgColor = type === "warning" ? "bg-yellow-50" : "bg-blue-50";
  const textColor = type === "warning" ? "text-yellow-800" : "text-blue-800";
  const borderColor =
    type === "warning" ? "border-yellow-200" : "border-blue-200";
  const Icon = type === "warning" ? FaExclamationTriangle : FaInfoCircle;
  const iconColor = type === "warning" ? "text-yellow-500" : "text-blue-500";

  return (
    <div className={`${bgColor} ${borderColor} border rounded-md p-4 mb-6`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden="true" />
        </div>
        <div className={`ml-3 ${textColor}`}>
          {title && <h4 className="text-sm font-medium">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  icon?: IconType;
}

// Component for creating a collapsible section
const CollapsibleSection: FC<CollapsibleSectionProps> = ({
  title,
  children,
  icon: Icon,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-gray-50 p-4 text-left text-lg font-semibold text-gray-900 focus:outline-none"
      >
        <span className="flex items-center">
          {Icon && <Icon className="mr-3 h-5 w-5 text-blue-500" />}
          {title}
        </span>
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
      <div className={`p-4 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

interface TaskListProps {
  tasks: string[];
}

// Task list component
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  // Use a proper type for the checked tasks state
  // This is a Record/dictionary with numeric keys and boolean values
  const [checkedTasks, setCheckedTasks] = useState<Record<number, boolean>>({});

  const toggleTask = (index: number) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-start">
          <input
            type="checkbox"
            id={`task-${index}`}
            checked={!!checkedTasks[index]}
            onChange={() => toggleTask(index)}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 mt-0.5"
          />
          <label
            htmlFor={`task-${index}`}
            className={`ml-2 text-gray-700 ${
              checkedTasks[index] ? "line-through text-gray-400" : ""
            }`}
          >
            {task}
          </label>
        </li>
      ))}
    </ul>
  );
};

const FirstWeekGuidePage = () => {
  return (
    <ResourceLayout
      title="First Week Survival Guide for International Students in the USA"
      description="Navigate your first week in the United States with confidence using our step-by-step guide."
      category="Guide"
      lastUpdated="May 1, 2025"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Your First Week Guide
          </h2>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <FaDownload className="mr-2 h-4 w-4" />
            Download PDF
          </button>
        </div>

        <p className="mt-4 text-gray-600">
          Welcome to the United States! This guide will help you navigate your
          crucial first week in your new home. We&apos;ve organized it
          day-by-day to make your transition as smooth as possible.
        </p>
      </div>

      <InfoBox title="Important First Steps">
        <p>
          Your first priority should be checking in with your university&apos;s
          international student office. This is not just helpful—it&apos;s
          required by US immigration regulations. Most schools require you to
          check in within a specific timeframe after arrival.
        </p>
      </InfoBox>

      <CollapsibleSection title="Before Your First Day" icon={FaInfoCircle}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Overcoming Jet Lag
          </h3>
          <ul className="ml-5 list-disc text-gray-700 space-y-1">
            <li>Try to adjust to US time as quickly as possible</li>
            <li>Stay awake until normal bedtime in your US location</li>
            <li>Get plenty of natural sunlight during the day</li>
            <li>Stay hydrated and limit caffeine</li>
            <li>
              Use melatonin (available over-the-counter) only if necessary
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Emergency Contacts
          </h3>
          <p className="text-gray-700 mb-3">
            Save these numbers in your phone:
          </p>
          <ul className="ml-5 list-disc text-gray-700 space-y-1">
            <li>
              <strong>911</strong> (US emergency services for police, fire,
              ambulance)
            </li>
            <li>
              University campus police:{" "}
              <span className="text-blue-600">
                [Add your campus police number]
              </span>
            </li>
            <li>
              International student office:{" "}
              <span className="text-blue-600">[Add your ISO number]</span>
            </li>
            <li>Your country&apos;s nearest consulate or embassy</li>
            <li>Your accommodation manager or landlord</li>
            <li>A trusted friend or family member</li>
            <li>Local taxi service or install Uber/Lyft app</li>
          </ul>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Navigation Setup
          </h3>
          <ul className="ml-5 list-disc text-gray-700 space-y-1">
            <li>Download offline Google Maps of your campus and city</li>
            <li>Save your accommodation address in multiple formats</li>
            <li>
              Learn basic directions in English if it&apos;s not your first
              language
            </li>
            <li>Identify landmarks near your accommodation</li>
            <li>Find the route to your university campus</li>
            <li>Download a public transportation app for your city</li>
          </ul>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Day 1: Arrival & Settling In"
        icon={FaMapMarkerAlt}
      >
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Immediate Priorities
          </h3>
          <TaskList
            tasks={[
              "Contact family to let them know you've arrived safely",
              "Purchase a US SIM card (T-Mobile, AT&T, Verizon, Mint Mobile are popular options)",
              "Withdraw US dollars from an ATM (look for withdrawal fee information)",
              "Find transportation to your accommodation (Uber/Lyft are widely used)",
              "Check in to your accommodation",
              "Locate nearby essentials (grocery store, pharmacy, ATM/bank, public transportation stops)",
              "Unpack essentials and make your bed",
            ]}
          />

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            First Meal & Groceries
          </h3>
          <p className="text-gray-700 mb-3">
            Simple first grocery list for US stores:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="ml-5 list-disc text-gray-700 space-y-1">
              <li>
                Bottled water (tap water is generally safe but you may prefer
                bottled)
              </li>
              <li>Bread and sandwich ingredients</li>
              <li>Fresh fruit and easy snacks</li>
              <li>Breakfast items (cereal, milk, eggs)</li>
              <li>Tea/coffee</li>
            </ul>
            <ul className="ml-5 list-disc text-gray-700 space-y-1">
              <li>Basic condiments</li>
              <li>Toilet paper and tissues</li>
              <li>Hand soap</li>
              <li>Simple cleaning supplies</li>
              <li>Microwave meals for quick options</li>
            </ul>
          </div>

          <InfoBox type="info" title="Popular US Grocery Stores">
            <p>
              Look for these common grocery stores: Walmart, Target, Kroger,
              Safeway, Trader Joe&apos;s, Whole Foods, Aldi. Walmart and Target
              also sell household items and electronics.
            </p>
          </InfoBox>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Day 2: Practical Setup" icon={FaMobileAlt}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Mobile Phone & Internet
          </h3>
          <TaskList
            tasks={[
              "Set up your phone with a US SIM card",
              "Download essential US apps (transportation, food delivery, maps, banking, etc.)",
              "Connect to Wi-Fi at your accommodation",
              "Test making local and international calls",
              "Set up Venmo/Cash App/Zelle for person-to-person payments",
            ]}
          />

          <InfoBox type="info" title="US Mobile Carriers">
            <p>
              Major carriers include Verizon, AT&T, and T-Mobile. Budget options
              include Mint Mobile, Cricket, Metro by T-Mobile, and Visible. Most
              offer prepaid plans with no contract for international students.
            </p>
          </InfoBox>

          <h3 className="mt-4 text-lg font-medium text-gray-900">Banking</h3>
          <TaskList
            tasks={[
              "Visit a US bank to open a student account (Chase, Bank of America, Wells Fargo, Citibank)",
              "Bring all required documents (passport, visa, I-20/DS-2019, address proof, university ID)",
              "Set up online banking and mobile app",
              "Order a debit card",
              "Understand international transfer fees",
              "Learn about Zelle, which many US banks offer for free transfers",
            ]}
          />

          <InfoBox type="warning" title="Banking Notice">
            <p>
              US banks may have monthly fees, minimum balance requirements, or
              ATM fees. Ask specifically about student accounts which often
              waive many of these fees. Compare options before choosing.
            </p>
          </InfoBox>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Transportation
          </h3>
          <TaskList
            tasks={[
              "Get a local transport card for discounted travel",
              "Learn how to purchase tickets or passes",
              "Download the local transit app",
              "Understand how to use Uber/Lyft if public transport is limited",
              "Find the routes between your accommodation, campus, and essential services",
            ]}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Day 3: University Orientation"
        icon={FaUniversity}
      >
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            University Registration
          </h3>
          <TaskList
            tasks={[
              "Attend international student orientation (usually mandatory)",
              "Complete SEVIS immigration check-in (required by law)",
              "Get your student ID card",
              "Verify your course enrollment",
              "Tour the campus",
              "Locate important places (department buildings, library, student services, dining halls, health center, etc.)",
            ]}
          />

          <InfoBox type="warning" title="Immigration Requirement">
            <p>
              You MUST report to your university&apos;s international student
              office within the timeframe specified by your school (usually
              within 30 days of program start date). Failure to do so could
              affect your visa status.
            </p>
          </InfoBox>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Meet Key People
          </h3>
          <TaskList
            tasks={[
              "International student advisors (very important for visa questions)",
              "Academic advisors",
              "Department administrators",
              "Resident advisors (if in university housing)",
              "Student mentors or buddies",
              "Fellow international students",
            ]}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Day 4: Health & Safety" icon={FaShieldAlt}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Health Services</h3>
          <TaskList
            tasks={[
              "Verify your health insurance coverage",
              "Locate the university health center",
              "Find the nearest hospital emergency room, urgent care center, and pharmacy",
              "Understand how to use your health insurance",
              "Learn the difference between emergency care, urgent care, and primary care",
              "Refill any prescriptions (note that US prescriptions require a US doctor)",
            ]}
          />

          <InfoBox type="info" title="US Healthcare System Basics">
            <p>
              In the US, <strong>emergency rooms</strong> are for
              life-threatening situations, <strong>urgent care</strong> centers
              are for non-emergency but immediate issues, and{" "}
              <strong>primary care</strong> is for routine checkups and
              non-urgent concerns. Emergency care is much more expensive than
              other options.
            </p>
          </InfoBox>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Safety Orientation
          </h3>
          <TaskList
            tasks={[
              "Learn about safe and unsafe areas near campus",
              "Understand basic US laws that might differ from your home country",
              "Know when public transportation stops running",
              "Save emergency numbers (especially 911)",
              "Check if your university has safety escorts for night travel",
              "Download any campus safety apps",
              "Verify your accommodation's security features",
              "Learn about extreme weather protocols if applicable (hurricanes, tornadoes, etc.)",
            ]}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Day 5: Academic Preparation" icon={FaGlobe}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Academic Resources
          </h3>
          <TaskList
            tasks={[
              "Purchase required textbooks (check for used options to save money)",
              "Set up university email and online learning platforms (Canvas, Blackboard, etc.)",
              "Tour the library and learn about borrowing privileges",
              "Find study spaces on campus",
              "Learn about tutoring and writing services",
              "Understand technology resources available to students",
              "Visit the bookstore for supplies",
            ]}
          />

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Class Preparation
          </h3>
          <TaskList
            tasks={[
              "Review your class schedule",
              "Locate your classrooms before the first day",
              "Read course syllabi",
              "Understand attendance policies (often stricter in the US)",
              "Learn about professor office hours (important for academic success)",
              "Prepare questions about course expectations",
              "Understand the US grading system (A, B, C, D, F)",
              "Learn about classroom participation expectations (often high in US classes)",
            ]}
          />

          <InfoBox type="info" title="US Academic Culture">
            <p>
              US classrooms often emphasize active participation, discussion,
              and critical thinking. Professors expect students to ask
              questions, contribute to discussions, and interact during class.
              This may be different from the academic culture in your home
              country.
            </p>
          </InfoBox>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Day 6: Cultural Integration" icon={FaUtensils}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Cultural Orientation
          </h3>
          <p className="text-gray-700 mb-3">
            Learn basic US customs and etiquette:
          </p>
          <ul className="ml-5 list-disc text-gray-700 space-y-1">
            <li>
              <strong>Tipping:</strong> 15-20% at restaurants is standard and
              expected
            </li>
            <li>
              <strong>Personal space:</strong> Americans typically maintain more
              personal space than in many countries
            </li>
            <li>
              <strong>Greeting styles:</strong> Handshakes are common in
              professional settings
            </li>
            <li>
              <strong>Punctuality:</strong> Americans tend to be time-conscious,
              especially for classes and appointments
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            American Communication Styles
          </h3>
          <ul className="ml-5 list-disc text-gray-700 space-y-1">
            <li>Direct communication is valued</li>
            <li>
              &quot;How are you?&quot; is often a greeting, not a genuine
              question
            </li>
            <li>Smiling at strangers is common and not considered unusual</li>
            <li>
              Americans often use casual language, even in somewhat formal
              settings
            </li>
          </ul>

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Social Connections
          </h3>
          <TaskList
            tasks={[
              "Attend welcome events for international students",
              "Join university clubs or organizations",
              "Connect with student groups from your home country or region",
              "Explore international friendship programs",
              "Sign up for language exchange if interested",
              "Follow your university's social media accounts",
              "Consider attending religious services if that's part of your tradition",
            ]}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Day 7: Final Preparations" icon={FaWifi}>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Before Classes Begin
          </h3>
          <TaskList
            tasks={[
              "Double-check your class schedule on the university system",
              "Prepare your study area with necessary supplies",
              "Test your commute to campus at the time you'll typically travel",
              "Set up a study schedule accounting for US academic expectations",
              "Organize your documents and important papers",
              "Make sure all registration requirements are complete",
              "Download any required apps or software for classes",
            ]}
          />

          <h3 className="mt-4 text-lg font-medium text-gray-900">
            Self-Care Planning
          </h3>
          <TaskList
            tasks={[
              "Locate fitness facilities on campus (often free for students)",
              "Find places for personal recreation",
              "Identify quiet spaces for relaxation",
              "Plan regular communication with family and friends back home",
              "Establish a routine that includes proper meals and adequate sleep",
              "Learn where to access mental health resources if needed",
            ]}
          />

          <InfoBox type="info" title="Cultural Adjustment Is Normal">
            <p>
              Everyone experiences culture shock to some degree. The first few
              weeks may bring feelings of excitement, confusion, frustration,
              and homesickness. These feelings are normal and will become easier
              to manage over time as you adjust to your new environment.
            </p>
          </InfoBox>
        </div>
      </CollapsibleSection>

      <div className="mt-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Common First Week Challenges in the US & Solutions
        </h2>

        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Cultural Adjustment
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <strong>Challenge:</strong> Americans may seem overly friendly
                but difficult to form deep friendships with
              </p>
              <p>
                <strong>Solution:</strong> Understand that American friendliness
                is genuine but may be different than in your culture. Join clubs
                or groups to form deeper connections over time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Academic Expectations
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <strong>Challenge:</strong> US classrooms often emphasize
                participation, discussion, and questioning
              </p>
              <p>
                <strong>Solution:</strong> Prepare for classes by reviewing
                materials ahead of time and writing down questions. Start by
                participating in small ways and build from there.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Food Adjustments
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <strong>Challenge:</strong> American portion sizes are often
                large and food may be different
              </p>
              <p>
                <strong>Solution:</strong> Consider sharing meals, saving
                leftovers (common practice in the US), and seeking out
                international grocery stores for familiar foods.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Transportation
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <strong>Challenge:</strong> Many US cities have limited public
                transportation compared to other countries
              </p>
              <p>
                <strong>Solution:</strong> Learn the campus shuttle system,
                consider carpooling with classmates, and use Uber/Lyft when
                necessary.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Understanding Costs
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <strong>Challenge:</strong> Prices are shown without tax, and
                tipping is expected
              </p>
              <p>
                <strong>Solution:</strong> Remember to calculate an additional
                5-10% for sales tax and 15-20% for tips at restaurants when
                budgeting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          Need Help Navigating Your First Week?
        </h3>
        <p className="mt-2 text-gray-600">
          Our experienced advisors are former international students who
          understand the challenges you&apos;re facing. We can provide
          personalized guidance to help you adjust to life in the United States.
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

export default FirstWeekGuidePage;
