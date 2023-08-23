import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
    {
        title: 'Uganda Land Commission under spotlight over illegal distribution of land in Entebbe',
        image:
            'https://nilepost.co.ug/wp-content/uploads/2023/07/Officials-show-the-disputed-landhatsApp-Image-2023-07-10-at-11.17.53-PM-350x250.jpeg',
        date: 'July 18, 2023',
    },
    {
        title: 'Residents on URC land refuse to make way for railway line repairs',
        image:
            'https://nilepost.co.ug/wp-content/uploads/2023/03/URChatsApp-Image-2023-03-28-at-9.29.15-AM-2-350x250.jpeg',
        date: 'March 18, 2023',
    },
    {
        title: 'Top 10 things to consider before buying land in Uganda',
        image:
            'https://nilepost.co.ug/wp-content/uploads/2023/03/Land-wrangles-in-MukonohatsApp-Image-2023-03-24-at-11.25.06-AM-350x250.jpeg',
        date: 'August 18, 2023',
    },

];

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

export function ArticlesCards() {
    const { classes } = useStyles();

    const cards = mockdata.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
        <Container py="xl">
            <h2 className='font-bold text-xl'>Stay land woke!</h2>
            <p>Latest information about land ownership and transactions, as well as legal processes
                involved in resolving land disputes</p>
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xl', cols: 1 }]}>
                {cards}
            </SimpleGrid>
            <p>Hungry for more land-related information ? Discover more information today.</p>
        </Container>
    );
}
