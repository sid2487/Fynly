export default function PricingPage() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "Perfect for individuals getting started with budgeting.",
      features: [
        "Track income & expenses",
        "Create one monthly plan",
        "Basic insights",
      ],
      highlight: false,
    },
    {
      title: "Pro",
      price: "$5",
      description: "Ideal for serious budgeters who want to go deeper.",
      features: [
        "Unlimited plans",
        "Expense breakdown & analysis using AI",
        "Priority support",
        "Export data",
        
      ],
      highlight: true,
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-extrabold dark:text-white">
          Simple, transparent pricing(working on it)
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Choose the plan that fits your budgeting needs best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`border rounded-2xl p-8 shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl ${
                plan.highlight
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white dark:bg-zinc-900 dark:text-white"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <p className="text-sm opacity-90 mb-6">{plan.description}</p>

              <ul className="text-left space-y-3 mb-8 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span>✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 px-4 rounded-md font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.highlight ? "Upgrade to Pro" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
