import React, { useState, useEffect } from 'react';
import { Layout } from '../../landingPageComponents';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 25;
    const apiUrl = 'https://strapi-sfty.onrender.com/api/articles';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}?page=${currentPage}&pageSize=${pageSize}`);
                const data = await response.json();
                setArticles(data);
                setTotalPages(data.meta.pagination.totalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    console.log(articles);

    return (
        <Layout>
            <div>
                <h1>Article List</h1>
                {/* <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <h2>{article.attributes.Title}</h2>
                            <p>{article.attributes.Excerpt}</p>
                            <p>Author: {article.attributes.Author}</p>
                            <p>Publication Date: {article.attributes.PublicationDate}</p>
                        </li>
                    ))}
                </ul>
                <div>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div> */}
            </div>
        </Layout>
    );
};

export default Articles;
