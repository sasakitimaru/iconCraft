import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Header from "./components/header.tsx";

function App({ title, unko }: { title: string; unko?: string }) {
  return (
    <>
      <Header />
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
