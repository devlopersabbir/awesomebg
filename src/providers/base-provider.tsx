import { Fragment, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

export default function BaseProvider({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <ThemeProvider>{children}</ThemeProvider>
      <Toaster />
    </Fragment>
  );
}
