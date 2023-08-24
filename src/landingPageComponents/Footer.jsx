import { createStyles, Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
    footer: {
        background: '#72B5A0',
        fontFamily: 'Jost',
        color: '#333',
        padding: '5px 100px',
        // marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    inner: {
        display: 'flex',
        fontFamily: 'Jost',
        color: '#333',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.md}`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        color: '#333',
        fontFamily: 'Jost',
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

export function Footer() {
    const { classes } = useStyles();
    const links = [
        { link: '#', label: 'Land Marketplace' },
        { link: '#', label: 'Land Forum' },
        { link: '#', label: 'Directory' },
        { link: '#', label: 'Resources' },
        { link: '#', label: 'Contact information' },
    ];

    const items = links.map((link) => (
        <Anchor
            color="#333"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));



    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <h2 className='font-bold text-lg border border-[#333] px-5 py rounded-xl'>LandWoke</h2>

                <Group className={classes.links}>{items}</Group>

                <Group spacing="xs" position="right" noWrap className='text-[#333]'>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} color="#333" />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}
