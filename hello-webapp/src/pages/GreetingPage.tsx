import type { JSX } from "react";
import { Card, CardContent, PageContent, PageTitle, Stack, Typography } from "@wso2/oxygen-ui";

// F1: the constant greeting. View only: no inputs, no actions, no sign-in.
export default function GreetingPage(): JSX.Element {
  return (
    <PageContent>
      <Stack spacing={3}>
        <PageTitle>
          <PageTitle.Header>Hello, World!</PageTitle.Header>
        </PageTitle>
        <Card variant="outlined">
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="h6" component="h2">
                Welcome
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thanks for stopping by.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </PageContent>
  );
}
