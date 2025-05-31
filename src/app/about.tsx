import React from "react";

export default function About() {
    return (
        <main className="flex flex-col h-[95%] light-gradient pt-5" style={{ padding: "2rem" }}>
            <div className="items-center m-[20%] text-center bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold pb-8 px-2">About This Site</h1>
            <p>
                Welcome to our website! This project was created to share information and resources with our community.
            </p>
            <p>
                We hope you find the content useful and engaging. Thank you for visiting!
            </p>
            </div>
        </main>
    );
}