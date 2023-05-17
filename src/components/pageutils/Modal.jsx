import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal({ isOpen, setIsOpen, onClick, onClose }) {
	//   let [isOpen, setIsOpen] = useState(true)

	//   function closeModal() {
	//     setIsOpen(false)
	//   }

	//   function openModal() {
	//     setIsOpen(true)
	//   }

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										PRIVACY POLICIES
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-900">
											Our vision is to make customers' lives very
											easy by continuing to provide this system that
											allows them to access our social media,Listed
											products, services and jobs from anywhere and
											any time.
											<br />
											<br /> EDBOSS BUSINESS AND TECHNOLOGIES LIMITED
											with its registered offices at Makerere Ham
											Towers,Makerere Road,Kampala-Uganda,East-Africa
											built BossesApp as a Free app.
											<br />
											<br />
											This SERVICE is provided by EDBOSS BUSINESS AND
											TECHNOLOGIES LIMITED at no cost except if you
											are purchasing our products and services listed
											in the e-market place and is intended for use
											as is. <br />
											<br />
											This page is used to inform visitors regarding
											our policies with the collection, use, and
											disclosure of Personal Information if anyone
											decided to use our Service. <br />
											<br />
											If you choose to use our Service, then you
											agree to the collection and use of information
											in relation to this policy.
											<br />
											<br /> The Personal Information that we collect
											is used for providing and improving the Service
											you request for. We will not use or share your
											information with anyone except as described in
											this Privacy Policy. <br />
											<br />
											The terms used in this Privacy Policy have the
											same meanings as in our Terms and Conditions,
											which are accessible at BossesApp unless
											otherwise defined in this Privacy Policy.{" "}
											<br />
											<br />
											Information Collection and Use For a better
											experience, while using our Service, we may
											require you to provide us with certain
											personally identifiable information, including
											but not limited to Email Address,phone,
											location,names, and any other information in
											order for us to serve you better in case you
											are purchasing any thing from our App e-market
											place.
											<br />
											<br /> The information that we request will be
											retained by us and used as described in this
											privacy policy.
											<br />
											<br /> Your personal conversations in
											user-to-user chats are still protected by
											end-to-end encryption, which means no one
											outside of your chats, not even BossesApp, can
											read or listen to them.
											<br />
											<br />
											BossesApp does use third-party services that
											may collect information used to identify you.
											Link to the privacy policy of third-party
											service providers used by this App. <br />
											<br />
											Google Play Services Google Analytics for
											Firebase Log Data We want to inform you that
											whenever you use our Service, in the case of an
											error in the app we collect data and
											information (through third-party products) on
											your phone called Log Data. This Log Data may
											include information such as your device
											Internet Protocol (“IP”) address, device name,
											operating system version, the configuration of
											the app when utilizing our Service, the time
											and date of your use of the Service, and other
											statistics. <br />
											<br />
											Cookies Cookies are files with a small amount
											of data that are commonly used as anonymous
											unique identifiers. These are sent to your
											browser from the websites that you visit and
											are stored on your device's internal memory.
											This Service does not use('these') “cookies”
											explicitly.
											<br />
											<br /> However, the app may use third-party
											code and libraries that use('“cookies”') to
											collect information and improve their services.
											You have the option to either accept or refuse
											these cookies and know when a cookie is being
											sent to your device. If you choose to refuse
											our cookies, you may not be able to use some
											portions of this Service. Service Providers We
											may employ third-party companies and
											individuals due to the following reasons: To
											facilitate our Service; To provide the Service
											on our behalf; To perform Service-related
											services; or To assist us in analyzing how our
											Service is used.
											<br />
											<br />
											<br /> We want to inform users of this Service
											that these third parties have access to their
											Personal Information. The reason is to perform
											the tasks assigned to them on our behalf.{" "}
											<br />
											<br />
											However, they are obligated not to disclose or
											use('the') information for any other purpose.
											<br />
											<br /> Security We value your trust in
											providing us your Personal Information, thus we
											are striving to use commercially acceptable
											means of protecting it. But remember that no
											method of transmission over the internet, or
											method of electronic storage is 100% secure and
											reliable, and we cannot guarantee its absolute
											security.
											<br />
											<br /> Links to Other Sites This Service may
											contain links to other sites. If you click on a
											third-party link, you will be directed to that
											site.
											<br />
											<br /> Note that these external sites are not
											operated by us. Therefore, we strongly advise
											you to review the Privacy Policy of these
											websites.
											<br />
											<br /> We have no control over and assume no
											responsibility for the content, privacy
											policies, or practices of any third-party sites
											or services.
											<br />
											<br />
											Children’s Privacy These Services do not
											address anyone under the age of 18 . <br />
											<br />
											We do not knowingly collect personally
											identifiable information from children under 18
											years of age. In the case we discover that a
											child under 18 has provided us with personal
											information, we immediately delete this from
											our servers.
											<br />
											<br /> If you are a parent or guardian and you
											are aware that your child has provided us with
											personal information, please contact us so that
											we will be able to do the necessary actions.
											<br />
											<br /> Changes to This Privacy Policy We may
											update our Privacy Policy from time to time.
											Thus, you are advised to review this page
											periodically for any changes. We will notify
											you of any changes by posting the new Privacy
											Policy on this page.
											<br />
											<br />
											Contact Us If you have any suggestions about
											any of our services especially in a process of
											purchasing products and services from our
											e-market place or having any questions about
											this Privacy Policy, do not hesitate to contact
											us at info@edbosses.com
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={onClick}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
