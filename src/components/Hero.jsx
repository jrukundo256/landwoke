import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(src/assets/hero-image2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Jost',
    },

    container: {
        height: rem(700),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 1,
        position: 'relative',
        fontFamily: 'Jost',

        [theme.fn.smallerThan('sm')]: {
            height: rem(500),
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: rem(50),
        fontWeight: 500,
        lineHeight: 1.1,
        fontFamily: 'Jost',

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,
        fontFamily: 'Jost',

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

export function HeroContent() {
    const { classes } = useStyles();

    return (
        <div className={`${classes.hero} font-jost bg-[#72B5A0]`}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>Bringing trust and justice to land ownershipy</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    A comprehensive hub for land-related information, resources, and a trusted marketplace
                </Text>
                <Button variant="gradient" size="md" radius="sm" className='mt-10 font-jost bg-[#72B5A0] hover:bg-[#5A9681]'>Learn more</Button>
            </Container>
        </div>
    );
}