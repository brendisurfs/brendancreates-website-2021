import {
    Button,
    Flex,
    LinkBox,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function ModalMenu({ routes }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex p={2} align="center">
                <Button
                    fontSize={24}
                    borderRadius={0}
                    variant="normal"
                    onClick={onOpen}
                >
                    Menu
                </Button>
            </Flex>
            <Modal variant="normal" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent variant="normal" borderRadius={0}>
                    <ModalHeader textStyle="h2" textAlign="center">
                        Navigation
                    </ModalHeader>
                    <ModalCloseButton borderRadius={0} />
                    <ModalBody isOpen={isOpen} onClose={onClose}>
                        <VStack>
                            {routes.map((route) => (
                                <LinkBox
                                    onClick={onClose}
                                    textStyle="link"
                                    _hover={{ color: "black" }}
                                    p={2}
                                >
                                    <Link className="active" to={route.path}>
                                        {route.name}
                                    </Link>
                                </LinkBox>
                            ))}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalMenu;
