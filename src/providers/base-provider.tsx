import { Fragment, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";
import { PatternStoreProvider } from "./pattern-store-provider";
import { TemplateStoreProvider } from "./template-store-provider";

export default function BaseProvider({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <ThemeProvider>
        <TemplateStoreProvider>
          <PatternStoreProvider>{children}</PatternStoreProvider>
        </TemplateStoreProvider>
      </ThemeProvider>
      <Toaster />
    </Fragment>
  );
}
