type Props = {
  children: JSX.Element | JSX.Element[];
};

function AuthLayout({ children }: Props) {
  return (
    <>
      <div className="sm:pt-20 lg:pt-8">{children}</div>
    </>
  );
}

export default AuthLayout;
