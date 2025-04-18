import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type Props = {
  children?: React.ReactNode
};

const PageWrapper = ({children}: Props) => {
  return (
    <Fragment>
      <Header />
        <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default PageWrapper;