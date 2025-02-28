import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorksSection";

// title: "Internee.pk",
// description: "Internee.pk | Pakistan's Virtual Internship Platform",
// icons: {
//   icon: [
//     { url: "https://www.internee.pk/assets/icon-BT8woF2N.jpg", media: "(prefers-color-scheme: light)" },
//     { url: "https://www.internee.pk/assets/icon-BT8woF2N.jpg", media: "(prefers-color-scheme: dark)" },
//   ],
// },
// openGraph: {
//   title: "Internee.pk",
//   description: "Internee.pk | Pakistan's Virtual Internship Platform",
//   url: "https://interneeportal.vercel.app/",
//   siteName: "interneeportal.vercel.app/",
//   images: [
//     {
//       url: "https://res.cloudinary.com/dsfm7zxhg/image/upload/v1738184931/Screenshot_248_th9gj9.png", // Replace with your OG image URL
//       width: 1200,
//       height: 630,
//     },
//   ],
//   locale: "en_US",
//   type: "website",
// },
// twitter: {
//   card: "summary_large_image",
//   title: "Internee.pk",
//   description: "Internee.pk | Pakistan's Virtual Internship Platform",
//   images: ["https://res.cloudinary.com/dsfm7zxhg/image/upload/v1738184931/Screenshot_248_th9gj9.png"], // Replace with your OG image URL
// },
// };


export default function Home() {
  return (
   <div>
    <Hero/>
    <FeaturesSection/>
    <HowItWorks/>

   </div>
  );
}
