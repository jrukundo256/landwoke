import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
} from '@mantine/core';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: '#333',
        fontWeight: 500,
        fontSize: '16px',

        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

export function NavBar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    return (
        <>
            <Header className="px-20 font-jost text-xl" height={80}>
                <Group position="apart" sx={{ height: '100%' }}>
                    {/* <h3 className='font-bold font-outfit text-[#222]'>LandWoke</h3> */}
                    <h2 className='text-[#222] font-bold font-outfit text-lg border border-[#333] px-5 py rounded-xl'>LandWoke</h2>

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        {/* Replace anchor tags with Link components */}
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <Link to="/marketplace" className={classes.link}>
                            Land marketplace
                        </Link>
                        <Link to="/directory" className={classes.link}>
                            Directory
                        </Link>
                        <Link to="/articles" className={classes.link}>
                            Resources
                        </Link>
                        <Link to="/forum" className={classes.link}>
                            Land Forum
                        </Link>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <Link to="/login"> {/* Wrap the button with Link */}
                            <Button className='font-jost' variant="default">
                                Log in
                            </Button>
                        </Link>
                        <Link to="/"> {/* Wrap the button with Link */}
                            <Button className='font-jost bg-[#72B5A0] hover:bg-[#5A9681]'>
                                Sign up
                            </Button>
                        </Link>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>
        </>
    );
}