import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router";

type Props = {
  children?: React.ReactNode;
};
const PageWrapper = ({ children }: Props) => {
  const navigate = useNavigate();
  const isLogged = sessionStorage.getItem("token");

  if (!isLogged) {
    navigate("/");
  }

  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default PageWrapper;
