"use client";

import React, { useState } from "react";
import  Breadcrumbs  from "../components/app/BreadCrumbs";
import { FilterableList } from 
import {UserIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: number;
  featured?: boolean;
}

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "navigating-us-education-system",
      title:
        "Navigating the U.S. Education System: A Guide for International Students",
      excerpt:
        "The American education system can be quite different from what you're used to in your home country. This guide breaks down the structure, expectations, and classroom culture.",
      author: {
        name: "Michael Chen",
        avatar: "/images/avatars/michael.jpg",
        role: "Academic Advisor",
      },
      date: "2023-09-28",
      category: "Academics",
      tags: ["classroom culture", "grading system", "course selection"],
      imageUrl: "/images/blog/us-education.jpg",
      readTime: 8,
      featured: true,
    },
    {
      id: "2",
      slug: "financial-planning-international-students",
      title: "Financial Planning 101 for International Students",
      excerpt:
        "Managing finances in a foreign country can be challenging. Learn how to create a budget, understand banking, and find financial resources available to international students.",
      author: {
        name: "Sarah Johnson",
        avatar: "/images/avatars/sarah.jpg",
        role: "Financial Aid Specialist",
      },
      date: "2023-09-15",
      category: "Finances",
      tags: ["budgeting", "scholarships", "banking"],
      imageUrl: "/images/blog/financial-planning.jpg",
      readTime: 6,
    },
    {
      id: "3",
      slug: "culture-shock-coping-strategies",
      title: "Culture Shock: Coping Strategies for Your First Semester",
      excerpt:
        "Feeling disoriented in your new environment is normal. Discover practical strategies for overcoming culture shock and embracing your international student experience.",
      author: {
        name: "Ananya Patel",
        avatar: "/images/avatars/ananya.jpg",
        role: "Student Experience Coordinator",
      },
      date: "2023-09-05",
      category: "Student Life",
      tags: ["culture shock", "mental health", "adjustment"],
      imageUrl: "/images/blog/culture-shock.jpg",
      readTime: 5,
    },
    {
      id: "4",
      slug: "opt-cpt-explained",
      title: "OPT and CPT Explained: Work Authorization for F-1 Students",
      excerpt:
        "Understanding your work options as an international student is crucial. This comprehensive guide explains Optional Practical Training (OPT) and Curricular Practical Training (CPT).",
      author: {
        name: "James Wilson",
        avatar: "/images/avatars/james.jpg",
        role: "Immigration Advisor",
      },
      date: "2023-08-22",
      category: "Immigration",
      tags: ["OPT", "CPT", "work authorization", "F-1 visa"],
      imageUrl: "/images/blog/opt-cpt.jpg",
      readTime: 10,
      featured: true,
    },
    {
      id: "5",
      slug: "finding-housing-us-campus",
      title: "Finding the Perfect Housing Near Your U.S. Campus",
      excerpt:
        "On-campus or off-campus? Roommates or solo? This guide walks you through the housing options available to international students and what to consider when making your decision.",
      author: {
        name: "Elena Rodriguez",
        avatar: "/images/avatars/elena.jpg",
        role: "Housing Specialist",
      },
      date: "2023-08-15",
      category: "Housing",
      tags: ["on-campus housing", "off-campus housing", "roommates", "leases"],
      imageUrl: "/images/blog/student-housing.jpg",
      readTime: 7,
    },
    {
      id: "6",
      slug: "networking-tips-international-students",
      title: "Networking Tips for International Students",
      excerpt:
        "Building a professional network is essential for your career development. Learn how to connect with professors, peers, and professionals in your field.",
      author: {
        name: "David Kim",
        avatar: "/images/avatars/david.jpg",
        role: "Career Counselor",
      },
      date: "2023-08-08",
      category: "Career",
      tags: ["networking", "professional development", "career"],
      imageUrl: "/images/blog/networking.jpg",
      readTime: 6,
    },
    {
      id: "7",
      slug: "maintaining-mental-health-abroad",
      title: "Maintaining Your Mental Health While Studying Abroad",
      excerpt:
        "Studying far from home presents unique mental health challenges. Discover resources and strategies to maintain your wellbeing throughout your international student journey.",
      author: {
        name: "Maya Singh",
        avatar: "/images/avatars/maya.jpg",
        role: "Student Wellness Counselor",
      },
      date: "2023-07-25",
      category: "Health",
      tags: ["mental health", "wellbeing", "stress management", "resources"],
      imageUrl: "/images/blog/mental-health.jpg",
      readTime: 8,
    },
    {
      id: "8",
      slug: "us-healthcare-system-guide",
      title:
        "Navigating the U.S. Healthcare System: A Guide for International Students",
      excerpt:
        "The American healthcare system can be complex. Learn about health insurance, finding doctors, and accessing healthcare services on and off campus.",
      author: {
        name: "Thomas Lee",
        avatar: "/images/avatars/thomas.jpg",
        role: "Health Insurance Specialist",
      },
      date: "2023-07-18",
      category: "Health",
      tags: ["healthcare", "insurance", "doctors", "medical services"],
      imageUrl: "/images/blog/healthcare.jpg",
      readTime: 9,
    },
    {
      id: "9",
      slug: "travel-tips-international-students",
      title: "Travel Tips for International Students Exploring the U.S.",
      excerpt:
        "Make the most of your time in the U.S. by exploring beyond your campus. Get practical advice on budget travel, transportation options, and must-visit destinations.",
      author: {
        name: "Sophia Martinez",
        avatar: "/images/avatars/sophia.jpg",
        role: "Student Activities Coordinator",
      },
      date: "2023-07-05",
      category: "Travel",
      tags: ["travel", "tourism", "transportation", "budget travel"],
      imageUrl: "/images/blog/travel.jpg",
      readTime: 7,
    },
    {
      id: "10",
      slug: "american-classroom-etiquette",
      title:
        "American Classroom Etiquette: What to Expect and How to Participate",
      excerpt:
        "Classroom dynamics in the U.S. might differ from your home country. Learn about participation expectations, professor-student relationships, and academic integrity standards.",
      author: {
        name: "Robert Johnson",
        avatar: "/images/avatars/robert.jpg",
        role: "Professor of International Education",
      },
      date: "2023-06-28",
      category: "Academics",
      tags: ["classroom etiquette", "participation", "academic culture"],
      imageUrl: "/images/blog/classroom.jpg",
      readTime: 6,
    },
  ];

  // Filter options for blog posts
  const filterOptions = [
    {
      id: "category",
      label: "Categories",
      options: [
        { value: "Academics", label: "Academics" },
        { value: "Career", label: "Career Development" },
        { value: "Finances", label: "Finances" },
        { value: "Health", label: "Health & Wellness" },
        { value: "Housing", label: "Housing" },
        { value: "Immigration", label: "Immigration" },
        { value: "Student Life", label: "Student Life" },
        { value: "Travel", label: "Travel" },
      ],
      multiSelect: false,
      defaultExpanded: true,
    },
    {
      id: "tags",
      label: "Topics",
      options: [
        { value: "academic culture", label: "Academic Culture" },
        { value: "banking", label: "Banking" },
        { value: "budgeting", label: "Budgeting" },
        { value: "career", label: "Career" },
        { value: "CPT", label: "CPT" },
        { value: "culture shock", label: "Culture Shock" },
        { value: "mental health", label: "Mental Health" },
        { value: "networking", label: "Networking" },
        { value: "OPT", label: "OPT" },
        { value: "visa", label: "Visa" },
      ],
      multiSelect: true,
      defaultExpanded: false,
    },
  ];

  // Sort options
  const sortOptions = [
    { id: "date", label: "Most Recent", defaultDirection: "desc" },
    { id: "readTime", label: "Reading Time", defaultDirection: "asc" },
    { id: "title", label: "Title", defaultDirection: "asc" },
  ];

  // Featured posts (at the top)
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Render each blog post in the filterable list
  const renderBlogPost = (post: BlogPost) => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-200"></div>
        {/* Replace with actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          {post.imageUrl ? (
            <span>Image: {post.imageUrl}</span>
          ) : (
            <span>No image</span>
          )}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {post.category}
          </span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {post.readTime} min read
          </div>
        </div>
        <Link href={`/blog/${post.slug}`} className="block mt-2">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 text-base text-gray-500 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <UserIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {post.author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className="bg-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Student Success Blog
            </h1>
            <p className="mt-3 text-xl text-indigo-100">
              Insights, tips, and resources for international students
              navigating U.S. education.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    <div className="relative h-60 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200"></div>
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        {post.imageUrl ? (
                          <span>Image: {post.imageUrl}</span>
                        ) : (
                          <span>No image</span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {post.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="block mt-2">
                        <h3 className="text-2xl font-semibold text-gray-900 hover:text-indigo-600">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="mt-3 text-base text-gray-500 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <UserIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {post.author.name}
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All blog posts with filters */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All Articles
            </h2>

            <FilterableList
              items={blogPosts}
              renderItem={renderBlogPost}
              filterOptions={filterOptions}
              sortOptions={sortOptions}
              keyExtractor={(post: { id: never; }) => post.id}
              searchKeys={["title", "excerpt", "author.name", "tags"]}
              emptyState={
                <div className="text-center py-12">
                  <h3 className="mt-2 text-base font-semibold text-gray-900">
                    No articles found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              }
              className="mt-8"
              layout="grid"
              showResultCount={true}
              perPage={9}
            />
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-indigo-50 rounded-lg px-6 py-10 sm:py-12 sm:px-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-indigo-900">
                  Subscribe to our newsletter
                </h3>
                <p className="mt-2 text-lg text-indigo-600">
                  Get our latest articles, resources, and updates delivered to
                  your inbox.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-indigo-500">
                  We&apos;ll never share your email. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
