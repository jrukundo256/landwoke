import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';

const mockdata = [
    {
        title: 'Information Sharing',
        description:
            'We maintain a reliable directory for valuable land-related data.  ',
        icon: IconGauge,
    },
    {
        title: 'Community & Trust Building',
        description:
            'We foster transparency in land transactions',
        icon: IconUser,
    },
    {
        title: 'Financial Security',
        description:
            'We foster transparency in land transactions',
        icon: IconCookie,
    },
];

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

export function Intro() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    LandWoke
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Bringing trust and justice to land ownership
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Landwoke is an  innovative platform that ensures rigorous verification of land dealers,
                safeguards against land  fraudulent activities, and acts as a reliable directory for valuable land-related data.
            </Text>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                By offering a unified solution, We empowers Ugandans from all walks of life with easy access to verified information, 
                foster transparency in land transactions, and contribute to a more secure and efficient land market.
            </Text>

            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}