import React from 'react';

const FAQs = () => {
    return (
        <div className="container mx-auto pt-16 px-4 md:px-0 max-w-7xl mb-14">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#7F57F1]">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Accordion title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <Accordion title="Why do we use it?" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <Accordion title="Where does it come from?" content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC." />
                    <Accordion title="Where can I get some?" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words." />
                    <Accordion title="Is it safe to use?" content="Yes, Lorem Ipsum is safe to use. It has been widely used for centuries and is considered standard placeholder text in the printing and typesetting industry." />
                </div>
                <div>
                    <Accordion title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <Accordion title="Why do we use it?" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <Accordion title="Where does it come from?" content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC." />
                    <Accordion title="Where can I get some?" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words." />
                    <Accordion title="Is it safe to use?" content="Yes, Lorem Ipsum is safe to use. It has been widely used for centuries and is considered standard placeholder text in the printing and typesetting industry." />
                </div>
                <div>
                    <Accordion title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <Accordion title="Why do we use it?" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <Accordion title="Where does it come from?" content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC." />
                    <Accordion title="Where can I get some?" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words." />
                    <Accordion title="Is it safe to use?" content="Yes, Lorem Ipsum is safe to use. It has been widely used for centuries and is considered standard placeholder text in the printing and typesetting industry." />
                </div>
                <div>
                    <Accordion title="What is Lorem Ipsum?" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                    <Accordion title="Why do we use it?" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
                    <Accordion title="Where does it come from?" content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC." />
                    <Accordion title="Where can I get some?" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words." />
                    <Accordion title="Is it safe to use?" content="Yes, Lorem Ipsum is safe to use. It has been widely used for centuries and is considered standard placeholder text in the printing and typesetting industry." />
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out">
            <div className="border-b bg-[#f3f4f6] p-4 cursor-pointer hover:bg-[#edf2f7]" onClick={toggleAccordion}>
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            {isOpen && (
                <div className="p-4 bg-white">
                    <p className="text-gray-700">{content}</p>
                </div>
            )}
        </div>
    );
};

export default FAQs;
