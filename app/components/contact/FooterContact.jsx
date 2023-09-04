import Submission from "../reuseable/Submission";

const FooterContact = () => {
  return (
    <div className="padding-section-y flex w-[100%] items-center px-4 xl:w-[70%]">
      <Submission
        small="Questions?"
        large="Let's Chat"
        optional="Ask away! We're ready to answer your questions."
      />
    </div>
  );
};

export default FooterContact;
