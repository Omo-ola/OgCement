import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div className="h-[100vh] bg-[var(--bg-grey)] flex flex-col justify-center">
      <Spinner />
    </div>
  );
}
