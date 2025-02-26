import Link from 'next/link';

export const metadata = {
    title: 'Terms of Use - Axtech Sdn Bhd',
    description: 'Terms and conditions for using Axtech Sdn Bhd services and website',
};

export default function TermsOfUse() {
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
                <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
                    <p>
                        {` By accessing and using the website and services of Axtech Sdn Bhd ("Company", "we", "our", or "us"), you agree to be bound by these Terms of Use ("Terms"), our Privacy Policy, and any other policies referenced herein. If you do not agree to these Terms, please do not use our website or services.`}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">2. Changes to Terms</h2>
                    <p>
                        {` We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of our website or services after such modifications constitutes your acceptance of the revised Terms.`}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">3. Use of Our Website and Services</h2>
                    <p>
                        <strong>Eligibility:</strong> You must be at least 18 years old or have the consent of a legal guardian to use our website and services.
                    </p>
                    <p>
                        <strong>User Conduct:</strong> When using our website and services, you agree:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Not to violate any applicable laws or regulations</li>
                        <li>Not to infringe upon the rights of others</li>
                        <li>Not to attempt to gain unauthorized access to our systems or networks</li>
                        <li>Not to interfere with the proper working of our website or services</li>
                        <li>Not to engage in any activity that could harm our website, services, or users</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality on our website, including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Axtech Sdn Bhd or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p>
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">5. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">6. Disclaimer of Warranties</h2>
                    <p>
                        {`   Our website and services are provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied. To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">7. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by applicable law, in no event shall Axtech Sdn Bhd or our directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our website or services.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">8. Indemnification</h2>
                    <p>
                        {`You agree to defend, indemnify, and hold harmless Axtech Sdn Bhd and our officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our website or services.`}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">9. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of Malaysia, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-xl font-semibold mt-6 mb-3">10. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at:
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
