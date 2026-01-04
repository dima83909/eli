// components/about/AboutCoachContent.tsx
export default function AboutCoachContent() {
  return (
    <div>
      <span className="mb-4 block text-sm uppercase tracking-widest text-gray-500">
        About the coach
      </span>

      <h2 className="mb-6 text-3xl font-light leading-tight text-gray-900 sm:text-4xl">
        Helping women feel strong, confident, and healthy
      </h2>

      <p className="mb-6 leading-relaxed text-gray-600">
        I’m a certified personal trainer with years of experience working with
        women of all fitness levels — from beginners to advanced athletes.
        My approach is based on balance, sustainability, and long-term results.
      </p>

      <p className="mb-8 leading-relaxed text-gray-600">
        I don’t believe in extreme diets or punishment workouts. Instead,
        I help you build a strong body, healthy habits, and confidence that
        lasts beyond the program.
      </p>

      <ul className="mb-10 space-y-3 text-sm text-gray-700">
        <li>• Personalized training & nutrition</li>
        <li>• Online & offline coaching</li>
        <li>• Focus on real, sustainable results</li>
      </ul>

      <button className="border border-black px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-black hover:text-white">
        Work with me
      </button>
    </div>
  );
}
