import React from 'react'

export default function Page() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-[10%] pb-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
                <h1>Terms and Conditions for NearbyGod.com</h1>
                <p><strong>Effective Date:</strong> [Insert Date]</p>

                <p>These Terms and Conditions govern your use of the NearbyGod.com website. By accessing or using our services, you agree to be bound by these terms.</p>

                <h2>1. User-Generated Content</h2>
                <p>The song lyrics available on NearbyGod.com are provided by users. By submitting content, you agree to the following:</p>
                <ul>
                    <li>You hold the necessary rights to submit the lyrics and grant NearbyGod.com a license to display the content.</li>
                    <li>You are responsible for ensuring the accuracy and legality of the submitted content.</li>
                </ul>

                <h2>2. Submitting a Song</h2>
                <p>You may submit new song lyrics through the submission form at <a href="https://nearbygod.com/submit">NearbyGod.com/submit</a>. By submitting, you:</p>
                <ul>
                    <li>Affirm that you own or have permission to share the content.</li>
                    <li>Agree that we may modify or remove content at our discretion.</li>
                </ul>

                <h2>3. Reporting a Song</h2>
                <p>If you believe a song needs to be updated or removed, you can submit a report through <a href="https://nearbygod.com/report">NearbyGod.com/report</a>. We will review and take action based on the request and our own discretion.</p>

                <h2>4. Intellectual Property</h2>
                <p>All content on NearbyGod.com is either owned by or licensed to us. You may not copy, reproduce, or distribute any content without our express written permission, except as permitted by law.</p>

                <h2>5. Prohibited Use</h2>
                <p>You agree not to use NearbyGod.com for:</p>
                <ul>
                    <li>Posting illegal or infringing content.</li>
                    <li>Submitting content that violates third-party rights, including intellectual property rights.</li>
                    <li>Engaging in any harmful, fraudulent, or abusive activity.</li>
                </ul>

                <h2>6. Limitation of Liability</h2>
                <p>NearbyGod.com is provided "as is" and without warranties of any kind. We are not liable for any damages arising from the use of the website, including but not limited to inaccuracies in content, technical issues, or unauthorized access to your data.</p>

                <h2>7. Changes to These Terms</h2>
                <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated effective date.</p>

                <h2>8. Governing Law</h2>
                <p>These Terms and Conditions are governed by the laws of [Insert Jurisdiction]. Any disputes arising from your use of NearbyGod.com will be subject to the exclusive jurisdiction of the courts in that jurisdiction.</p>

                <h2>9. Contact Us</h2>
                <p>For any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:support@nearbygod.com">support@nearbygod.com</a>.</p>

            </main>
        </div>
    )
}
