import { Box, Flex, Center, IconButton, ChakraProvider } from '@chakra-ui/react'

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowDownIcon,
  ArrowUpIcon
} from '@chakra-ui/icons'

import React, { useState } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

export default function Holocron({
  launch,
  fullscreen,
  title,
  backgroundColor,
  ...props
}) {
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key)
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
  }
  const handle = useFullScreenHandle()
  const [up, setUp] = useStickyState(15, 'holocronUpValue')
  const [down, setDown] = useStickyState(15, 'holocronDownValue')
  const [left, setLeft] = useStickyState(30, 'holocronLeftValue')
  const [right, setRight] = useStickyState(15, 'holocronRightValue')
  const [launched, setLaunched] = useState(false)

  return (
    <ChakraProvider>
      <FullScreen handle={handle}>
        <Box bg={launched ? '#000' : `${backgroundColor}`}>
          <Flex h='100vh' overflow='hidden'>
            <Box
              w={`${100}%`}
              p={1}
              pt={up + 'vh'}
              pb={down + 'vh'}
              pr={right + 'vh'}
              pl={left + 'vh'}
              h='100vh'
            >
              {!launched ? (
                <Box w='100%' h='100%' bg='black' borderRadius={3}>
                  <Flex>
                    <Center
                      w='10px'
                      maxHeight={`calc(100vh - 0.5rem - ${up}vh - ${down}vh)`}
                    >
                      <Box display='grid'>
                        <IconButton
                          mb={3}
                          onClick={() => setLeft(left - 1)}
                          aria-label='Expand Left'
                          icon={<ArrowBackIcon />}
                        />
                        <IconButton
                          onClick={() => setLeft(left + 1)}
                          aria-label='Expand Left'
                          icon={<ArrowForwardIcon />}
                        />
                      </Box>
                    </Center>
                    <Box flex='1'>
                      <Box
                        flex='1'
                        h='10px'
                        align='center'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Box mt='-15px'>
                          <IconButton
                            mr={3}
                            aria-label='Expand Up'
                            {...(up <= 0 && { disabled: true })}
                            onClick={() => setUp(up - 1)}
                            icon={<ArrowUpIcon />}
                          />
                          <IconButton
                            aria-label='Expand Down'
                            onClick={() => setUp(up + 1)}
                            icon={<ArrowDownIcon />}
                          />
                        </Box>
                      </Box>
                      <Center
                        flex='1'
                        mt='10px'
                        h={`calc(100vh - 0.5rem  - 25px - ${up}vh - ${down}vh)`}
                      >
                        <Box display='grid'>
                          {title}
                          <Flex pt={2}>
                            <Box onClick={() => setLaunched(true)} pr={2}>
                              {launch}
                            </Box>
                            <Box onClick={handle.enter} pl={2}>
                              {fullscreen}
                            </Box>
                          </Flex>
                        </Box>
                      </Center>
                      <Box
                        flex='1'
                        mb='20px'
                        h='10px'
                        align='center'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Box mb='30px'>
                          <IconButton
                            mr={3}
                            aria-label='Expand Up'
                            onClick={() => setDown(down + 1)}
                            icon={<ArrowUpIcon />}
                          />
                          <IconButton
                            aria-label='Expand Down'
                            {...(down <= 0 && { disabled: true })}
                            onClick={() => setDown(down - 1)}
                            icon={<ArrowDownIcon />}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Center
                      w='10px'
                      maxHeight={`calc(100vh - 0.5rem - ${up}vh - ${down}vh)`}
                    >
                      <Box display='grid'>
                        <IconButton
                          mb={3}
                          aria-label='Expand Right'
                          onClick={() => setRight(right + 1)}
                          icon={<ArrowBackIcon />}
                        />
                        <IconButton
                          aria-label='Expand Right'
                          onClick={() => setRight(right - 1)}
                          {...(right <= 0 && { disabled: true })}
                          icon={<ArrowForwardIcon />}
                        />
                      </Box>
                    </Center>
                  </Flex>
                </Box>
              ) : (
                <Flex>
                  <Box
                    w='50%'
                    h='100%'
                    minHeight={`calc(100vh - ${up}vh - ${down}vh)`}
                    maxHeight={`calc(100vh - ${up}vh - ${down}vh)`}
                    overflow='hidden'
                    bg='black'
                  >
                    {props.children}
                  </Box>
                  <Box
                    w='50%'
                    h='100%'
                    minHeight={`calc(100vh - ${up}vh - ${down}vh)`}
                    maxHeight={`calc(100vh - ${up}vh - ${down}vh)`}
                    overflow='hidden'
                    bg='black'
                  >
                    {props.children}
                  </Box>
                </Flex>
              )}
            </Box>
          </Flex>
        </Box>
      </FullScreen>
    </ChakraProvider>
  )
}
