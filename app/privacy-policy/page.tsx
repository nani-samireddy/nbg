import React from 'react'

export default function Page() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-[10%] pb-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
                <h1>Privacy Policy for NearbyGod.com</h1>
                <p><strong>Effective Date:</strong> [23/09/2024]</p>

                <p>At NearbyGod.com, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>

                <h2>1. Information We Collect</h2>
                <p>We collect information that you voluntarily submit when you interact with our website, such as:</p>
                <ul>
                    <li>Your name and email address when submitting or reporting a song.</li>
                    <li>Any additional personal information you provide in communication with us.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>The information we collect is used to:</p>
                <ul>
                    <li>Process song submissions, updates, or reports.</li>
                    <li>Communicate with you regarding your submissions or reports.</li>
                    <li>Improve our services and website functionality.</li>
                </ul>
                <p>We do not share your personal information with third parties unless required by law.</p>

                <h2>3. Cookies</h2>
                <p>We may use cookies to enhance user experience and improve our website performance. You can manage cookie preferences through your browser settings.</p>

                <h2>4. Data Security</h2>
                <p>We take reasonable precautions to protect your personal information from unauthorized access, loss, or misuse. However, no data transmission over the internet is completely secure, and we cannot guarantee the security of your data.</p>

                <h2>5. User-Submitted Content</h2>
                <p>The content on NearbyGod.com is primarily user-submitted. By submitting song lyrics, you acknowledge that:</p>
                <ul>
                    <li>You have the right to submit the content and grant us permission to display it on the website.</li>
                    <li>You are responsible for ensuring the accuracy of the submitted content.</li>
                </ul>

                <h2>6. Request for Removal or Updates</h2>
                <p>If you find incorrect information or wish to have a song removed from the website, you may request changes via the form at <a href="https://nearbygod.com/report">NearbyGod.com/report</a>. We will review your request and take appropriate action.</p>

                <h2>7. Children&apos;s Privacy</h2>
                <p>NearbyGod.com is not intended for children under the age of 13, and we do not knowingly collect personal information from children.</p>

                <h2>8. Changes to This Policy</h2>
                <p>We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.</p>

                <h2>9. Contact Us</h2>
                <p>If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:support@nearbygod.com">support@nearbygod.com</a>.</p>
            </main>
        </div>
    )
}
