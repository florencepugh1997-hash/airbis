import { CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Certified Parts',
      description: 'All components are rigorously certified and authenticated. We guarantee the authenticity and quality of every product.',
    },
    {
      icon: Zap,
      title: 'Fast Global Shipping',
      description: 'Express delivery to over 180 countries. Get the parts you need quickly with real-time tracking.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: 'Industry-leading security with encrypted transactions. Multiple payment methods for your convenience.',
    },
  ];

  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Airbis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the highest quality aerospace components and exceptional service to aviation professionals worldwide.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={28} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
