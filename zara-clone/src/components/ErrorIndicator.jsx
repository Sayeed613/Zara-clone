import { Button, useToast } from "@chakra-ui/react";

export default function ErrorIndicator({ title, description }) {
  const toast = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: title || "An error occurred.",
          description: description || "Something went wrong. Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Error
    </Button>
  );
}
