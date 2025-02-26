import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy - Axtech Sdn Bhd',
    description: 'Privacy Policy and data protection information for Axtech Sdn Bhd',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-pink-800 text-white py-4 px-8 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-xl font-bold cursor-pointer">Axtech Sdn Bhd</h1>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto py-12 px-6">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
                    <p>
                        {`Axtech Sdn Bhd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.`}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
                    <p>
                        <strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about our products or services, when you participate in activities on our website, or otherwise when you contact us.
                    </p>
                    <p>
                        <strong>Technical Information:</strong> When you visit our website, we may collect certain information automatically, including your IP address, browser type, referring/exit pages, operating system, date/time stamps, and clickstream data.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
                    <p>We may use the information we collect for various purposes, including:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Providing, maintaining, and improving our services</li>
                        <li>Responding to your inquiries and fulfilling your requests</li>
                        <li>Sending administrative information, such as updates, security alerts, and support messages</li>
                        <li>Conducting research and analysis to improve our products and services</li>
                        <li>Customizing your experience on our website</li>
                        <li>Protecting our rights, your safety, and the safety of others</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-3">4. Disclosure of Your Information</h2>
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Service providers who perform services on our behalf</li>
                        <li>Business partners with whom we jointly offer products or services</li>
                        <li>Legal authorities when required by law or to protect our rights</li>
                        <li>A buyer or successor in the event of a merger, acquisition, or sale of assets</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-3">5. Security of Your Information</h2>
                    <p>
                        We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">6. Your Rights</h2>
                    <p>
                        You may have certain rights regarding your personal information, including the right to access, correct, or delete the personal information we hold about you. If you wish to exercise these rights, please contact us using the information provided below.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">{`7. Children's Privacy`}</h2>
                    <p>
                        Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">8. Changes to This Privacy Policy</h2>
                    <p>
                        {` We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.`}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <address className="not-italic mt-2">
                        Axtech Sdn Bhd<br />
                        1-12-23, Suntech Penang Cybercity<br />
                        Lintang Mayang Pasir 1, Bandar Bayan Baru<br />
                        11900, Bayan Lepas, Penang, Malaysia<br />
                        Email: <a href="mailto:care@axtech.app" className="text-blue-600 hover:underline">care@axtech.app</a>
                    </address>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 px-8 text-center">
                <div className="max-w-7xl mx-auto">
                    <p>&copy; {new Date().getFullYear()} Axtech Sdn Bhd. All Rights Reserved.</p>
                    <div className="mt-2">
                        <Link href="/" className="text-blue-400 hover:underline">Return to Homepage</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
