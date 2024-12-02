import { FCProps } from '@/types/app';

const FAQ: FCProps = () => {
  const faqItems = [
    {
      question: 'How does Femlives works?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat metus enim, sit amet feugiat diam egestas sit amet. Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Sed eget ultricies nunc. Aenean mollis lectus nibh, et gravida diam ornare nec. Vivamus a ligula tempus, pellentesque dui vel, elementum neque. Fusce id imperdiet diam. Mauris in ultricies lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque placerat justo vel iaculis.' },
    {
      question: 'Why us?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat metus enim, sit amet feugiat diam egestas sit amet. Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Sed eget ultricies nunc. Aenean mollis lectus nibh, et gravida diam ornare nec. Vivamus a ligula tempus, pellentesque dui vel, elementum neque. Fusce id imperdiet diam. Mauris in ultricies lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque placerat justo vel iaculis.' },
    {
      question: 'What is menopause?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat metus enim, sit amet feugiat diam egestas sit amet. Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Sed eget ultricies nunc. Aenean mollis lectus nibh, et gravida diam ornare nec. Vivamus a ligula tempus, pellentesque dui vel, elementum neque. Fusce id imperdiet diam. Mauris in ultricies lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque placerat justo vel iaculis.' },
    {
      question: 'What is hormone replacement therapy?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat metus enim, sit amet feugiat diam egestas sit amet. Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Sed eget ultricies nunc. Aenean mollis lectus nibh, et gravida diam ornare nec. Vivamus a ligula tempus, pellentesque dui vel, elementum neque. Fusce id imperdiet diam. Mauris in ultricies lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque placerat justo vel iaculis.' },
    {
      question: 'Do I need a blood test?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat metus enim, sit amet feugiat diam egestas sit amet. Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Sed eget ultricies nunc. Aenean mollis lectus nibh, et gravida diam ornare nec. Vivamus a ligula tempus, pellentesque dui vel, elementum neque. Fusce id imperdiet diam. Mauris in ultricies lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque placerat justo vel iaculis.' },
    {
      question: 'How do I talk to the expert?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat metus enim, sit amet feugiat diam egestas sit amet. Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Sed eget ultricies nunc. Aenean mollis lectus nibh, et gravida diam ornare nec. Vivamus a ligula tempus, pellentesque dui vel, elementum neque. Fusce id imperdiet diam. Mauris in ultricies lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque placerat justo vel iaculis.' },
  ];

  return (
    <section className="flex flex-col items-center gap-16 bg-white px-6 py-12 md:px-24 md:py-16">
  
  <h2
    className="text-center font-dm-sans text-4xl font-bold leading-[44px]"
    style={{
      color: 'var(--black-black-default, #24091A)',
    }}
  >
    FAQ
  </h2>

  <div className="w-full max-w-4xl flex flex-col gap-16">
    {faqItems.map((item, index) => (
      <details
        key={index}
        className="group flex flex-col justify-center items-start gap-4 p-6 rounded-lg border border-primary bg-white shadow-sm"
        style={{
          borderColor: 'var(--primary-primary-lighter, #FFF1FF)',
          backgroundColor: 'var(--white-white-default, #FFFFFE)',
        }}
      >
        <summary
          className="w-full flex justify-between items-center cursor-pointer text-xl font-bold"
          style={{
            color: 'var(--black-black-default, #24091A)',
            fontSize: '24px',
            lineHeight: '26px',
          }}
        >
          <span>{item.question}</span>
          <span className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="group-open:hidden"
            >
              <path
                d="M8 10L12 14L16 10"
                stroke="#24091A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="hidden group-open:block"
            >
              <path
                d="M16 14L12 10L8 14"
                stroke="#24091A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </summary>

        <p
          className="text-base text-gray-700"
          style={{
            color: 'var(--black-black-default, #24091A)',
          }}
        >
          {item.answer}
        </p>
      </details>
    ))}
  </div>
</section>
  );
};

export default FAQ;