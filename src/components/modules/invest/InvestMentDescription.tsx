import Container from "@/components/ui/container";
import InvestmentFrom from "./InvestmentFrom";
import Image from "next/image";

const InvestMentDescription = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 items-center ">
        {/* Left side - Image + Text */}
        <div>
          <Image
            src="/invest.jpg"
            alt="Investment Banner"
            width={800}
            height={400}
            className="rounded-xl shadow-lg"
          />

          <h2 className="mt-6 text-2xl md:text-3xl font-bold  leading-snug">
            বছরে 40% পর্যন্ত হাই-রিটার্নের অপরাজেয় সুযোগ: স্মার্ট ও সেক্যুর
            ইনভেস্টমেন্টের নতুন রেভল্যুশন!
          </h2>

          <div className="mt-6 space-y-4  leading-relaxed">
            <h3 className="text-lg font-semibold">About Our Service</h3>
            <p>
              আমাদের সার্ভিস আপনাকে দিয়ে একদম স্মার্ট, রিলায়েবল ইনভেস্টমেন্টের
              অপশন, যেখানে কম রিস্কে, আপনি পেতে পারেন হাই রিটার্নের কনফিডেন্স।
              এটি একদমই স্মার্ট ইনভেস্টমেন্ট সল্যুশন, যা আপনাকে দিবে প্রফেশনাল
              গাইডেন্স এবং এক্সপার্ট স্ট্র্যাটেজি, সময়মতো ৪০% পর্যন্ত রিটার্নের
              অপরাজেয় সুযোগ।
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">
              কেন ইনভেস্টমেন্ট করবেন?
            </h3>
            <ul className="list-disc pl-5 space-y-2 ">
              <li>
                ট্রাস্টেড প্ল্যাটফর্ম, যেখান থেকে কম রিস্কে আপনি ইনভেস্টমেন্ট
                করতে পারবেন সিকিউরড সিস্টেমে
              </li>
              <li>৪০% পর্যন্ত ইয়ারলি রিটার্নের সুযোগ</li>
              <li>এক্সপার্টদের হাতে ফাইনান্সিয়াল কনসাল্টেশন গাইডেন্স</li>
              <li>
                সহজ প্ল্যান ও রিস্ক কনসাল্টেশন স্ট্র্যাটেজির মাধ্যমে ফান্ড ও
                সেটেলমেন্টে গ্রোথের অপরাজেয় সুযোগ
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - Form */}
        <InvestmentFrom />
      </div>
    </Container>
  );
};

export default InvestMentDescription;
