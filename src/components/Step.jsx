import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function Step() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handleOpen() {
        setIsOpen((prevState) => !prevState);
    }

    function handlePrevious() {
        if (step > 1) setStep((prevStep) => prevStep - 1);
    }

    function handleNext() {
        if (step < 3) setStep((prevStep) => prevStep + 1);
    }
    return (
        <>
            <button className="close" onClick={handleOpen}>
                &times;
            </button>

            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : null}>1</div>
                        <div className={step >= 2 ? "active" : null}>2</div>
                        <div className={step >= 3 ? "active" : null}>3</div>
                    </div>

                    <p className="message">
                        Step {step}: {messages[step - 1]}
                    </p>

                    <div className="buttons">
                        <button
                            style={{ backgroundColor: "#7951f2", color: "#fff" }}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <button
                            style={{ backgroundColor: "#7951f2", color: "#fff" }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
