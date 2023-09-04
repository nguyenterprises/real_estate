import StandardContact from "../contact/StandardContact";
import Title from "./Title";

const Submission = ({ small, large, optional }) => {
  return (
    <div className="flex w-[100%] flex-col gap-4">
      <div className="mx-auto">
        <Title one={small} two={large} />
      </div>

      <div className="text-center text-lg tracking-wider lg:text-xl">
        {optional}
      </div>

      <div className="mx-auto w-[95%] pt-8">
        <StandardContact textSize="md" />
      </div>
    </div>
  );
};

export default Submission;
