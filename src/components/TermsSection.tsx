import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const termsData = [
  {
    id: '1',
    title: 'Booking & Reservations',
    content: 'All reservations must be confirmed with a valid credit card. A deposit of 50% is required at the time of booking, with the remaining balance due upon arrival. Reservations can be modified up to 48 hours before arrival, subject to availability.'
  },
  {
    id: '2',
    title: 'Cancellation Policy',
    content: 'Cancellations made 7 days or more before arrival will receive a full refund minus a $50 processing fee. Cancellations made 3-6 days before arrival will receive a 50% refund. Cancellations made within 48 hours of arrival are non-refundable.'
  },
  {
    id: '3',
    title: 'Check-in & Check-out',
    content: 'Check-in time is 4:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request and subject to additional charges. Please contact our front desk to arrange special timing.'
  },
  {
    id: '4',
    title: 'Resort Policies',
    content: 'Our resort maintains a peaceful environment. Quiet hours are from 10:00 PM to 7:00 AM. Smoking is prohibited in all indoor areas. Pets are welcome in designated pet-friendly accommodations with prior arrangement and additional fees.'
  },
  {
    id: '5',
    title: 'Activities & Amenities',
    content: 'All guests have access to hiking trails, fitness center, and common areas. Spa services, guided tours, and special dining experiences require advance booking. Some activities may have age restrictions or additional charges.'
  },
  {
    id: '6',
    title: 'Safety & Liability',
    content: 'Guests participate in all activities at their own risk. The resort is not liable for personal injuries or lost/stolen items. Emergency procedures are posted in each room. Please familiarize yourself with evacuation routes upon arrival.'
  },
  {
    id: '7',
    title: 'Environmental Responsibility',
    content: 'We are committed to sustainable practices. Please respect our natural environment by staying on designated trails, properly disposing of waste, and conserving water and energy. Feeding wildlife is strictly prohibited.'
  },
  {
    id: '8',
    title: 'Payment & Additional Charges',
    content: 'We accept all major credit cards and cash. Additional charges may apply for spa services, premium dining, room service, and some activities. All prices are subject to applicable taxes and resort fees.'
  }
];

const TermsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1444px] mx-auto px-8 max-md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
              Terms & Conditions
            </h2>
            <p className="text-xl text-forest-600">
              Please review our policies to ensure a smooth and enjoyable stay
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {termsData.map((term) => (
              <AccordionItem
                key={term.id}
                value={term.id}
                className="bg-cream-50 rounded-lg border border-cream-200 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-forest-900 hover:text-forest-700 py-6 text-lg">
                  {term.title}
                </AccordionTrigger>
                <AccordionContent className="text-forest-700 pb-6 leading-relaxed">
                  {term.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-forest-50 rounded-lg border-l-4 border-forest-600">
            <p className="text-forest-800 text-sm">
              <strong>Note:</strong> These terms and conditions are subject to change without notice. 
              By making a reservation, you acknowledge that you have read, understood, and agree to 
              be bound by these terms and conditions. For questions or clarifications, please contact 
              our guest services team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;