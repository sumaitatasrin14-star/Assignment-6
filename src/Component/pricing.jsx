const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    desc: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-16 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-2">
        Simple, Transparent Pricing
      </h1>
      <p className="text-gray-500 mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md transition ${
              plan.highlight
                ? "bg-gradient-to-br from-purple-600 to-indigo-500 text-white scale-105"
                : "bg-white"
            }`}
          >
            {plan.highlight && (
              <span className="bg-yellow-400 text-xs px-3 py-1 rounded-full text-black font-semibold inline-block mb-3">
                Most Popular
              </span>
            )}

            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p
              className={`text-sm mb-4 ${
                plan.highlight ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {plan.desc}
            </p>

            <h3 className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-sm font-normal">/Month</span>
            </h3>

            <ul className="text-sm space-y-2 mb-6 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✔ {feature}
                </li>
              ))}
            </ul>

            <button
              className={` btn w-full py-2 rounded-full font-medium ${
                plan.highlight
                  ? "bg-white text-purple-600"
                  : "bg-purple-600 text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}