import dynamic from "next/dynamic";

type NoSsrProps = {
  children: React.ReactNode;
};

const NoSsr = ({ children }: NoSsrProps) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
