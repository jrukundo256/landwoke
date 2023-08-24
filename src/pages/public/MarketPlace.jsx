import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Layout } from '../../landingPageComponents';
import {
    Badge,
    Group,
  
} from '@mantine/core';

const MarketPlace = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [activePage, setPage] = useState(1);

    const pageSize = 25;
    const apiUrl = 'https://strapi-sfty.onrender.com/api/articles';

    useEffect(() => {
        getArticles();
    }, [activePage]);

    const getArticles = async () => {
        // setLoading(true);
        try {
            await axios
                .get("https://strapi-sfty.onrender.com/api/articles")
                .then((res) => setArticles(res.data.data));
        } catch (error) {
            console.error("Network Error:", error.message);
        }
        // setLoading(false);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    console.log(articles);

    return (
        <Layout>
            {/* <div className="article-list w-[800]"> */}
            <div className="article-list w-[800] ml-10 justify-center">
                {/* <h1 className='text-xl font-bold'>Resources</h1> */}
                <Group position="left">
                    <Badge className='font-jost bg-[#72B5A0]' variant="filled" size="xl">
                        Land Marketplace
                    </Badge>
                </Group>

                {/* <ul>
                    {articles.map((article) => (
                        <li key={article.id} className="article-item my-10">
                            <h2 className='underline my-2 text-xl font-bold'>{article.attributes.Title}</h2>
                            <p className='text-xl font-md'>{article.attributes.Excerpt}</p>
                            <p className="text-sm author">Author: {article.attributes.Author}</p>
                            <p className="text-sm publication-date">Publication Date: {article.attributes.PublicationDate}</p>
                        </li>
                    ))}
                </ul>

                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} className={`page-button ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div> */}
            </div>
        </Layout>
    );
};

export default MarketPlace;
