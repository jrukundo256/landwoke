import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';
// import { Section } from '@mantine/core/lib/AppShell/HorizontalSection/Section/Section';
import {
    createStyles,
    Text,
    Title,
} from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        padding: '5px 0 0 0',
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
        padding: '20px 0',
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

}));

export function LandDealsGrid() {
    // const theme = useMantineTheme();
    const { classes, theme } = useStyles();
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

    return (
        <div my="md" className='bg-[#EDEDED] py-20 px-20 mx-150 mb-20 flex justify-center'>
            <div className='border'>
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Land deals of the week
                </Title>

                <Text className={classes.description} ta="center" mt="md">
                    We bring you the latest land deals from our vetted and trusted property dealers
                </Text>

                <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
                    <Grid gutter="md">
                        <Grid.Col>
                            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                        </Grid.Col>
                    </Grid>
                </SimpleGrid>
            </div>
        </div>
    );
}