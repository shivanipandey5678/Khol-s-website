

import { Flex, Box, Menu, MenuButton, MenuList, MenuItem, IconButton, Text, Popover, Image, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, Button, Portal, InputGroup, Input, InputRightElement, Heading } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaSearch } from 'react-icons/fa'; 
import star from '../../assets/star.png';
import card from '../../assets/card.png';
import doller from '../../assets/doller.png';
import question from '../../assets/question.png';

export function BottomNavBar() {
    return (
        <Flex 
            direction={{ base: 'column', md: 'row' }} 
            justify={'space-between'} 
            p={2} 
            align={'center'} 
            wrap={{ base: 'wrap', md: 'nowrap' }}
            display={{ base: 'none', md: 'flex' }} // Hide on small screens
        >
            <Flex 
                w={{ base: '100%', md: '35%' }} 
                direction={{ base: 'column', md: 'row' }} 
                align={{ base: 'flex-start', md: 'center' }} 
                justify={'space-evenly'} 
                mb={{ base: 2, md: 0 }}
            >
                <Flex align={'center'}>
                    {/* Shop by Category */}
                    <Box>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>Gift Idea</MenuItem>
                                <MenuItem>Back to school & college</MenuItem>
                                <MenuItem>Summer Shop</MenuItem>
                                <MenuItem>Home</MenuItem>
                                <MenuItem>Women</MenuItem>
                                <MenuItem>Men</MenuItem>
                                <MenuItem>Kids, Baby & Toys</MenuItem>
                                <MenuItem>Shoes</MenuItem>
                                <MenuItem>Beauty | S E P H O R A</MenuItem>
                                <MenuItem>jewelry & Accessories</MenuItem>
                                <MenuItem>Sales & Clearance</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box ml={2}><Text>Shop by Category</Text></Box>
                </Flex>

                <Flex>
                    <Popover>
                        <PopoverTrigger>
                            <Button>
                                <Image src={star} h={6} mr={1} />
                                My Store: Select Store
                            </Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader>Set my store</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <InputGroup>
                                        <Input type='text' placeholder='Enter city or state or ZIP code' />
                                        <InputRightElement pointerEvents="none">
                                            <FaSearch color="gray.300" />
                                        </InputRightElement>
                                    </InputGroup>
                                </PopoverBody>
                                <PopoverFooter>
                                    <input 
                                        type="checkbox" 
                                        name="near_shop" 
                                        id="near_shop" 
                                        style={{ marginRight: "6px" }} 
                                    />
                                    <label htmlFor="near_shop">Show only Sephora at Kohl's stores</label>
                                </PopoverFooter>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Flex>
            </Flex>

            <Flex 
                width={{ base: '100%', md: '30%' }} 
                direction={{ base: 'column', md: 'row' }} 
                justify={'space-around'} 
                align={{ base: 'flex-start', md: 'center' }}
            >
                <Flex align={'center'} mb={{ base: 2, md: 0 }}>
                    <Popover>
                        <PopoverTrigger>
                            <Flex align={'center'} cursor={'pointer'}>
                                <Image src={card} h={5} mr={1} />
                                <Text>Kohl's Card</Text>
                            </Flex>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader>
                                    <Flex justify={'center'}>
                                        <Image src={card} h={5} />
                                        <Heading size='sm' textAlign={'center'}>
                                            See if you prequalify with no impact to your credit score!
                                        </Heading>
                                    </Flex>
                                </PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Flex direction={'column'} textAlign={'center'}>
                                        <Text>Once approved, take an extra 35% off your first Kohl's Card purchase!</Text>
                                        <Text>Exclusions apply*</Text>
                                    </Flex>
                                </PopoverBody>
                                <PopoverFooter textAlign={'center'}>
                                    <u>GET STARTED</u>
                                </PopoverFooter>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </Flex>

                <Flex align={'center'} mb={{ base: 2, md: 0 }}>
                    <Image src={doller} h={5} mr={1} />
                    <Text>Kohl's Coupons</Text>
                </Flex>

                <Flex align={'center'}>
                    <Image src={question} h={5} mr={1} />
                    <Text>Help</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
