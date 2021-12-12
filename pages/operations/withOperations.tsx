import { FC } from "react";

const withOperations = (Component: FC<any>) => (props: any) => {
  return <Component title={'fafafafa'} />;
};

export default withOperations;
