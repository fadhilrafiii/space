const { default: Button } = require("@/components/Button");
const { default: Stars } = require("@/components/Stars");
const { default: Image } = require("next/image");

const Landing = () => {
  return (
    <section
      id="fadhil-muhammad"
      name="fadhil-muhammad"
      className="landing w-full h-screen relative overflow-hidden"
    >
      <Stars />
      <Image
        className="moon absolute right-[5%] top-[5%] md:top-[15%]"
        src="/images/moon.png"
        alt="Moon"
        width={200}
        height={200}
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
      />
      <div className="min-h-[400px] absolute bottom-[-80px] w-full">
        <Image
          src="/images/earth-surface.png"
          alt="Earth Surface"
          priority
          fill
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="px-8 md:px-16 absolute h-screen w-screen flex flex-col justify-center pb-24 md:pb-10">
        <h4 className="mb-2 text-xs md:text-xl text-white opacity-70 font-secondary text tracking-wide">
          Welcome to my Space! It&apos;s me
        </h4>
        <h1 className="text-5xl md:text-7xl text-white font-primary mb-2 md:mb-5 font-medium">
          Fadhil Muhammad
        </h1>
        <h2 className="text-2xl md:text-4xl text-white font-primary mb-3 md:mb-6">
          I&apos;m a <span className="job-title text-accent"></span>
        </h2>
        <p className="text-xs md:text-base text-white max-w-full md:max-w-[640px] opacity-60 mb-8">
          Software Engineer with 2++ years working experiences. Passionate about
          Progressive Web App and System Design. Had various work on web
          development, implementing web designs and architecting application
          features system design. Keen to maximize user experience and learn
          continuously on system design.
        </p>

        <div className="flex gap-8 absolute bottom-[32px] justify-evenly md:relative md:bottom-0 md:justify-start w-[calc(100%-64px)]">
          <Button type="link" mode={Button.Mode.Outlined}>
            Explore
          </Button>
          <Button type="link" mode={Button.Mode.Filled}>
            Visit 3D Space
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
