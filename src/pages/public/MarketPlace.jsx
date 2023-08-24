import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout } from '../../landingPageComponents';
import { Badge, Group } from '@mantine/core';

const MarketPlace = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [activePage, setPage] = useState(1);

    useEffect(() => {
        getDeals();
    }, [activePage]);

    const getDeals = async () => {
        try {
            const response = await axios.get('https://strapi-sfty.onrender.com/api/land-deals');
            setArticles(response.data.data);
        } catch (error) {
            console.error('Network Error:', error.message);
        }
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <Layout>
            <div className="article-list w-[800] ml-10 justify-center">
                <Group position="left">
                    <Badge className="font-jost bg-[#72B5A0]" variant="filled" size="xl">
                        Land Marketplace
                    </Badge>
                </Group>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {articles.map((article) => (
                        <li key={article.id} className="article-item my-10">
                            <p className="text-sm author">Dealer: {article.attributes.dealer}</p>
                            <h2 className="underline my-2 text-xl font-bold">{article.attributes.title}</h2>
                            <p className="text-xl font-md">{article.attributes.description}</p>
                            <p className="text-xl font-md">Price: {article.attributes.price}</p>
                            <p className="text-sm author">Rating: {article.attributes.rating}</p>
                        </li>
                    ))}
                </ul>

                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MarketPlace;
