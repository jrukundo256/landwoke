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
        title: 'Community & Trust Building',
        description:
            'We foster transparency in land transactions',
        icon: IconUser,
    },
    {
        title: 'Information Sharing',
        description:
            'We maintain a reliable directory for valuable land-related data.  ',
        icon: IconGauge,
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
        padding: '20px 0',
        color: '#222',
        fontWeight: 500,
        fontFamily: 'Jost',

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 800,
        margin: 'auto',
        fontFamily: 'Jost',
        color: '#333',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: '#72B5A0',
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        fontFamily: 'Jost',
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        fontFamily: 'Jost',
        // '&::after': {
        //     content: '""',
        //     display: 'block',
        //     backgroundColor: theme.fn.primaryColor(),
        //     width: rem(45),
        //     height: rem(2),
        //     marginTop: theme.spacing.sm,
        // },
    },
}));

export function Intro() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
        <section className='font-jost'>
            <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
                <feature.icon size={rem(50)} stroke={1} color={'#5F5497'} />
                <Text fz="lg" fw={500} className={`${classes.cardTitle} font-jost`} mt="md">
                    {feature.title}
                </Text>
                <Text fz="sm" c="dimmed" mt="sm">
                    {feature.description}
                </Text>
            </Card>
        </section>
    ));

    return (
        <Container className='mt-10 mb-20' size="lg" py="xl">
            <Group position="center">
                <Badge className='font-jost bg-[#72B5A0] lowercase' variant="filled" size="lg">
                    LandWoke
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                We're bringing trust and justice to land ownership
            </Title>

            <Text className={classes.description} ta="center" mt="md">
                Landwoke is an  innovative platform that ensures rigorous verification of land dealers,
                safeguards against land  fraudulent activities, and acts as a reliable directory for valuable land-related data.
                By offering a unified solution, We empowers Ugandans from all walks of life with easy access to verified information,
                foster transparency in land transactions, and contribute to a more secure and efficient land market.
            </Text>


            <SimpleGrid className='py-5' cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {features}
            </SimpleGrid>

            <div className="text-center mt-5">
                Looking for vital contacts of lawyers, vetted property dealers, etc? 
                <a
                    href="#"
                    className="text-[#5F5497] hover:underline"
                >
                     Check out our land directory today.
                </a>
            </div>
        </Container>
    );
}