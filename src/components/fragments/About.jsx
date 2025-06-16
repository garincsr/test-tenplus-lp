import Product1 from "../../assets/images/tenplus-product-1.png";
import CustomButton from "../layout/CustomButton";

export default function About() {
  return (
    <>
      <div className="w-full mb-10 md:mb-20 md:mx-auto md:text-center lg:mx-0 lg:text-left lg:w-1/2">
        <h1 className="mb-4 font-black tracking-tight text-5xl">
          Power Up Your Day with Tenplus
        </h1>
        <p className="text-xl">
          Keep hydrated and keep moving forward with our potent blend of
          essential electrolytes, supercharged by powerful botanical ingredients
          and vital vitamins.
        </p>
        <br />
        <p className="text-xl mb-5">
          More than just hydration, Tenplus replenishes electrolytes, enhances
          recovery, and helps you perform at your best—all without added sugar.
        </p>
        <div className="flex justify-center md:block">
          <CustomButton text="Power Up Now" />
        </div>
      </div>

      <div className="flex flex-wrap gap-y-8 md:gap-x-8 md:gap-y-6 lg:gap-x-7">
        <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.167rem)] flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-5xl xl:text-6xl border-b-2 border-primary font-black tracking-widest text-center md:text-left">
            HYDRATION
          </h1>
          <h1 className="sm:block md:block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black/60 font-black tracking-tight text-center md:text-left">
            PERFORMANCE
          </h1>
          <h1 className="sm:block md:block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black/60 font-black tracking-tight text-center md:text-left">
            RECOVERY
          </h1>
          <div className="hidden md:block mt-6">
            <img
              className="w-64 sm:w-72 md:w-80 lg:w-[20rem] mx-auto md:mx-0"
              src={Product1}
              alt="product"
            />
          </div>
        </div>
        <div className="w-full mb-10 md:w-[calc(50%-1rem)] lg:w-[calc(66.666%-1.167rem)] text-sm md:text-lg lg:text-lg xl:text-xl lg:max-w-[40rem]">
          <h2 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl text-center md:text-left">
            Sodium 480mg + Potassium 175mg + Magnesium 40mg
          </h2>
          <p className="mt-4">
            Maintaining electrolyte balance is critical. Insufficient levels can
            lead to reduced endurance, muscle spasms, cognitive issues, vertigo,
            and other symptoms of dehydration.
          </p>
          <p className="mt-4">
            Sodium 480mg + Potassium 175mg + Magnesium 40mg Maintaining
            electrolyte balance is critical. Insufficient levels can lead to
            reduced endurance, muscle spasms, cognitive issues, vertigo, and
            other symptoms of dehydration. Leading experts and organisation's
            1,2,3 recommend 500 to 1000 mg of sodium per litre of fluid during
            exercise, especially in hot climates.
          </p>
          <p className="mt-4">
            Tenplus gives you 480 mg of sodium per 600 ml serving, which equals
            800 mg per litre – right in the ideal range.
          </p>
          <p className="mt-4">
            Mix one sachet of Tenplus with 600 ml of water for optimal hydration
            and performance.
          </p>
          <blockquote className="border-l-2 border-gray-600 mt-4 ps-2 text-sm">
            1. American College of Sports Medicine (ACSM) 2. National Athletic
            Trainers' Association (NATA) 3. International Society of Sports
            Nutrition (ISSN)
          </blockquote>
        </div>
      </div>
    </>
  );
}
