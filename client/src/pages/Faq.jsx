import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is NITA-EXAMBUDDY",
      answer:
        "It is an online platform designed to facilitate the sharing and access of educational resources among college students. It allows users to upload and download study materials such as notes, presentations, and study guides.",
    },
    {
      question: "How do I get started with NITA-EXAMBUDDY",
      answer:
        "To get started, simply create an account on our platform. Once registered, you can start uploading your study materials or explore and download resources shared by other students.",
    },
    {
      question: "Is It free to use?",
      answer:
        "Yes, It is free to use. We believe in making education accessible to everyone, and our platform is open to all students without any subscription fees.",
    },
    {
      question: "Are my documents secure on NITA-EXAMBUDDY",
      answer:
        "Absolutely. We prioritize the security and privacy of your documents. Itemploys advanced encryption and security measures to ensure the confidentiality of your uploaded materials.",
    },
    {
      question: "Can I upload any type of document on NITA-EXAMBUDDY",
      answer:
        "Yes, you can upload a variety of document types, including PDFs, Word documents, PowerPoint presentations, and more. Our platform is designed to accommodate a range of study materials.",
    },
    {
      question: "How can I search for specific study materials on NITA-EXAMBUDDY",
      answer:
        "Use the search bar on the platform to look for specific study materials. You can enter keywords, subjects, or topics to find relevant documents quickly.",
    },
    {
      question:
        "Can I collaborate with other students on projects using NITA-EXAMBUDDY",
      answer:
        "Absolutely. we offers real-time collaboration tools, allowing you to work on group projects and assignments with your peers. Share, edit, and collaborate seamlessly.",
    },
    {
      question: "Is there a limit to the file size I can upload?",
      answer:
        "Currently, there is a file size limit for uploads. Please refer to the platform's guidelines for specific details on file size limitations.",
    },
    {
      question: "How can I provide feedback on a document?",
      answer:
        "Each document on it's comes with a feedback and rating section. You can share your thoughts, ask questions, or provide feedback on the quality of the material.",
    },
  ];
  return (
    <div className="lg:h-heightWithoutNavbar grid place-content-center">
      <div className="mx-auto max-w-[1550px] px-5 py-8">
        <h1 className="mb-6 text-3xl font-black">Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((item, i) => (
            <div key={i} className="">
              <h1 className="mb-2 text-lg font-medium sm:text-xl">
                {item.question}
              </h1>
              <p className="border-b pb-2 text-sm text-gray-700 sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
