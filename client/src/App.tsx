import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function App({ title, unko }: { title: string; unko?: string }) {
  return (
    <>
      <Heading>
        Hello {title} {unko} !!
      </Heading>
      <div>
        <Button colorScheme="blue">Button</Button>
      </div>
    </>
  );
}

export default App;
